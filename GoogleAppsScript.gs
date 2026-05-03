function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var params = e.parameter;
    var timestamp = new Date();
    
    // 1. Handle Specific Sheet based on Type
    var targetSheetName;
    var targetHeaders;
    var targetRowData;

    if (params.type === 'chatbot') {
        targetSheetName = 'Chatbot History';
        targetHeaders = ['Timestamp', 'Name', 'Email', 'Mobile', 'Country', 'Preference'];
        targetRowData = [timestamp, params.name, params.email, params.mobile, params.country, params.preference];
        
    } else if (params.type === 'booking') {
        targetSheetName = 'Bookings';
        targetHeaders = ['Timestamp', 'Name', 'Mobile', 'Date', 'Travelers', 'Package', 'Country'];
        targetRowData = [timestamp, params.name, params.mobile, params.date, params.travelers, params.packageTitle, params.country];

    } else if (params.type === 'subscribe') {
        targetSheetName = 'Email Subscriptions';
        targetHeaders = ['Timestamp', 'Email'];
        targetRowData = [timestamp, params.email];

    } else {
        // Default: Get Started / Contact
        targetSheetName = 'Get Started Responses';
        targetHeaders = ['Timestamp', 'Name', 'Email', 'Phone', 'Country', 'Message'];
        targetRowData = [timestamp, params.name, params.email, params.phone, params.country, params.message];
    }

    // Write to Target Sheet (Create if missing, Add headers if missing)
    writeToSheet(doc, targetSheetName, targetHeaders, targetRowData);

    // 2. Handle Detailed Logs (Master Sheet)
    var logSheetName = 'Detailed Logs';
    var logHeaders = ['Timestamp', 'Source', 'Name', 'Email', 'Phone/Mobile', 'Country', 'Details/Message', 'Raw Data'];
    var logRowData = [
        timestamp, 
        targetSheetName, 
        params.name || '-', 
        params.email || '-', 
        params.mobile || params.phone || '-', 
        params.country || '-', 
        (params.message || params.preference || (params.packageTitle ? 'Booking: ' + params.packageTitle : 'Subscription')), 
        JSON.stringify(params)
    ];
    writeToSheet(doc, logSheetName, logHeaders, logRowData);

    // 3. Send Email Notification
    sendNotificationEmail(params);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': 'submitted' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Helper function to handle Sheet creation and Header check
function writeToSheet(doc, sheetName, headers, rowData) {
  var sheet = doc.getSheetByName(sheetName);
  
  // If sheet doesn't exist, create it
  if (!sheet) {
    sheet = doc.insertSheet(sheetName);
  }
  
  // Check if headers exist (if last row is 0, it's empty)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
  
  // Append the data
  sheet.appendRow(rowData);
}

function sendNotificationEmail(params) {
    var emailRecipient = Session.getActiveUser().getEmail(); 
    var typeLabel = "Get Started Form";
    if (params.type === 'chatbot') typeLabel = "Chatbot";
    if (params.type === 'booking') typeLabel = "Booking Request";
    if (params.type === 'subscribe') typeLabel = "Newsletter";

    var subject = "New Lead: " + typeLabel;
    
    var body = "You have a new submission!\n\nSource: " + typeLabel + "\n\n";
    
    if (params.type === 'booking') {
       body += "Name: " + params.name + "\n" +
               "Mobile: " + params.mobile + "\n" +
               "Package: " + params.packageTitle + "\n" +
               "Country: " + params.country + "\n" +
               "Date: " + params.date + "\n" +
               "Travelers: " + params.travelers + "\n";
    } else if (params.type === 'subscribe') {
       body += "Email: " + params.email + "\n";
    } else {
       body += "Name: " + params.name + "\n" +
               "Email: " + params.email + "\n" +
               "Phone: " + (params.mobile || params.phone) + "\n" +
               "Country: " + params.country + "\n";
               
       if (params.type === 'chatbot') {
         body += "Preference: " + params.preference + "\n";
       } else {
         body += "Message: " + params.message + "\n";
       }
    }
    
    MailApp.sendEmail(emailRecipient, subject, body);
}

function setup() {
    // Run this manually once if you want to pre-create sheets, 
    // but the script now handles creation automatically on submission.
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    verifySheet(doc, 'Chatbot History', ['Timestamp', 'Name', 'Email', 'Mobile', 'Country', 'Preference']);
    verifySheet(doc, 'Get Started Responses', ['Timestamp', 'Name', 'Email', 'Phone', 'Country', 'Message']);
    verifySheet(doc, 'Bookings', ['Timestamp', 'Name', 'Mobile', 'Date', 'Travelers', 'Package', 'Country']);
    verifySheet(doc, 'Email Subscriptions', ['Timestamp', 'Email']);
    verifySheet(doc, 'Detailed Logs', ['Timestamp', 'Source', 'Name', 'Email', 'Phone/Mobile', 'Country', 'Details/Message', 'Raw Data']);
}

function verifySheet(doc, name, headers) {
    var sheet = doc.getSheetByName(name);
    if (!sheet) {
        sheet = doc.insertSheet(name);
    }
    if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
    }
}
