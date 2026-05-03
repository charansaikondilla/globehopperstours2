# Google Sheets Chatbot Backend Setup

To make your "AeroBot" save data to a Google Sheet, follow these simple steps:

## 1. Create the Sheet
1.  Go to [sheets.google.com](https://sheets.google.com) and create a **New Spreadsheet**.
2.  Name it "Travel Leads".
3.  In the first row, add these headers in columns A, B, C, D, E:
    *   **Timestamp**
    *   **Name**
    *   **Email**
    *   **Mobile**
    *   **Preference**

## 2. Add the Script
1.  In your Google Sheet, click **Extensions > Apps Script**.
2.  Delete any code in the `Code.gs` file and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.mobile,
    data.preference
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy
1.  Click the blue **Deploy** button (top right) > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  Fill in:
    *   **Description**: "Chatbot API"
    *   **Execute as**: "Me"
    *   **Who has access**: **"Anyone"** (Important!)
4.  Click **Deploy**.
5.  Copy the **Web app URL** (it starts with `https://script.google.com/...`).

## 4. Connect to Your Website
1.  Open `components/Chatbot/ChatWindow.tsx`.
2.  Find the `finalizeChat` function.
3.  Replace the `// TODO: Add fetch call here` comment with:

```typescript
    fetch('YOUR_WEB_APP_URL_HERE', {
      method: "POST",
      body: JSON.stringify(finalData)
    });
```
