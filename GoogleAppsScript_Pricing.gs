
// ==========================================
// Google Apps Script for GlobeHopperTours Pricing
// ==========================================
// 1. Paste this code into extensions > Apps Script
// 2. Click 'Save'
// 3. Run 'setupPricingSheet' ONCE to create/populate the sheet
// 4. Deploy as Web App (Execute as: Me, Access: Anyone)

// --- CONFIGURATION ---
const SHEET_NAME = "Destinations Pricing";
const LOG_SHEET_NAME = "System Logs";

// --- INITIAL DATA (Full Dataset from Website) ---
const INITIAL_DATA = [
  // --- JAPAN ---
  { id: 'tokyo-modern-adventure', country: 'japan', title: 'Tokyo Modern Adventure', price: '449', currency: '$' },
  { id: 'kyoto-cultural-heritage', country: 'japan', title: 'Kyoto Cultural Heritage', price: '499', currency: '$' },
  { id: 'mount-fuji-hakone', country: 'japan', title: 'Mount Fuji & Hakone Retreat', price: '399', currency: '$' },
  { id: 'hiroshima-miyajima', country: 'japan', title: 'Hiroshima & Miyajima Island', price: '359', currency: '$' },
  { id: 'hokkaido-winter-wonderland', country: 'japan', title: 'Hokkaido Winter Wonderland', price: '549', currency: '$' },
  { id: 'grand-japan-journey', country: 'japan', title: 'Grand Japan Journey', price: '1,299', currency: '$' },

  // --- PHILIPPINES ---
  { id: 'palawan-el-nido', country: 'philippines', title: 'Palawan El Nido Paradise', price: '399', currency: '$' },
  { id: 'boracay-beach-escape', country: 'philippines', title: 'Boracay Beach Escape', price: '349', currency: '$' },
  { id: 'banaue-rice-terraces', country: 'philippines', title: 'Banaue Rice Terraces Adventure', price: '299', currency: '$' },
  { id: 'cebu-bohol-adventure', country: 'philippines', title: 'Cebu & Bohol Adventure', price: '449', currency: '$' },
  { id: 'siargao-surfing', country: 'philippines', title: 'Siargao Surfing & Island Life', price: '379', currency: '$' },
  { id: 'ultimate-philippines', country: 'philippines', title: 'Ultimate Philippines Island Odyssey', price: '1,099', currency: '$' },

  // --- NEPAL ---
  { id: 'everest-base-camp', country: 'nepal', title: 'Everest Base Camp Trek', price: '1,299', currency: '$' },
  { id: 'annapurna-circuit', country: 'nepal', title: 'Annapurna Circuit Trek', price: '999', currency: '$' },
  { id: 'kathmandu-culture', country: 'nepal', title: 'Kathmandu Valley Cultural Tour', price: '349', currency: '$' },
  { id: 'pokhara-adventure', country: 'nepal', title: 'Pokhara Adventure & Relaxation', price: '299', currency: '$' },
  { id: 'chitwan-safari', country: 'nepal', title: 'Chitwan Jungle Safari', price: '279', currency: '$' },
  { id: 'nepal-grand-adventure', country: 'nepal', title: 'Nepal Grand Adventure', price: '899', currency: '$' },

  // --- SRI LANKA ---
  { id: 'cultural-triangle', country: 'sri-lanka', title: 'Cultural Triangle Explorer', price: '449', currency: '$' },
  { id: 'hill-country-tea', country: 'sri-lanka', title: 'Hill Country & Tea Plantations', price: '399', currency: '$' },
  { id: 'yala-safari', country: 'sri-lanka', title: 'Yala Wildlife Safari', price: '329', currency: '$' },
  { id: 'south-coast-beaches', country: 'sri-lanka', title: 'South Coast Beach Paradise', price: '369', currency: '$' },
  { id: 'adam-peak-pilgrimage', country: 'sri-lanka', title: 'Adam\'s Peak Pilgrimage Trek', price: '249', currency: '$' },
  { id: 'complete-sri-lanka', country: 'sri-lanka', title: 'Complete Sri Lanka Experience', price: '999', currency: '$' },

  // --- INDIA ---
  { id: 'golden-triangle', country: 'india', title: 'Golden Triangle Classic', price: '449', currency: '$' },
  { id: 'himalayan-triangle', country: 'india', title: 'Himalayan Triangle Adventure', price: '599', currency: '$' },
  { id: 'rajasthan-royal', country: 'india', title: 'Rajasthan Royal Heritage', price: '699', currency: '$' },
  { id: 'kerala-backwaters', country: 'india', title: 'Kerala Backwaters & Beaches', price: '549', currency: '$' },
  { id: 'varanasi-spiritual', country: 'india', title: 'Varanasi Spiritual Journey', price: '299', currency: '$' },
  { id: 'goa-beach-party', country: 'india', title: 'Goa Beach & Party Experience', price: '399', currency: '$' },
  { id: 'incredible-india-grand', country: 'india', title: 'Incredible India Grand Tour', price: '1,599', currency: '$' },

  // --- CHINA ---
  { id: 'beijing-xian', country: 'china', title: 'Beijing & Xi\'an Imperial Journey', price: '599', currency: '$' },
  { id: 'shanghai-modern', country: 'china', title: 'Shanghai Modern Metropolis', price: '499', currency: '$' },
  { id: 'guilin-yangshuo', country: 'china', title: 'Guilin & Yangshuo Scenic Beauty', price: '449', currency: '$' },
  { id: 'chengdu-pandas', country: 'china', title: 'Chengdu Pandas & Sichuan Cuisine', price: '399', currency: '$' },
  { id: 'hong-kong-macau', country: 'china', title: 'Hong Kong & Macau Getaway', price: '549', currency: '$' },
  { id: 'china-grand-discovery', country: 'china', title: 'China Grand Discovery', price: '1,799', currency: '$' },

  // --- THAILAND ---
  { id: 'bangkok-temples', country: 'thailand', title: 'Bangkok City & Temples', price: '279', currency: '$' },
  { id: 'phuket-beach', country: 'thailand', title: 'Phuket Beach Paradise', price: '329', currency: '$' },
  { id: 'chiang-mai-culture', country: 'thailand', title: 'Chiang Mai Cultural Journey', price: '349', currency: '$' },
  { id: 'krabi-railay', country: 'thailand', title: 'Krabi & Railay Beach Escape', price: '369', currency: '$' },
  { id: 'phi-phi-islands', country: 'thailand', title: 'Phi Phi Islands Adventure', price: '399', currency: '$' },
  { id: 'grand-thailand', country: 'thailand', title: 'Grand Thailand Experience', price: '599', currency: '$' },

  // --- VIETNAM ---
  { id: 'hanoi-halong', country: 'vietnam', title: 'Hanoi & Halong Bay Adventure', price: '299', currency: '$' },
  { id: 'saigon-mekong', country: 'vietnam', title: 'Saigon & Mekong Delta Escape', price: '349', currency: '$' },
  { id: 'hoi-an-ancient', country: 'vietnam', title: 'Hoi An Ancient Town Experience', price: '279', currency: '$' },
  { id: 'sapa-trekking', country: 'vietnam', title: 'Sapa Mountain Trekking', price: '399', currency: '$' },
  { id: 'explore-vietnam', country: 'vietnam', title: 'Explore Iconic Vietnam', price: '499', currency: '$' },

  // --- UAE (DUBAI) ---
  { id: 'dubai-luxury', country: 'united-arab-emirates', title: 'Dubai Luxury Escape', price: '899', currency: '$' },

  // --- SOUTH KOREA ---
  { id: 'seoul-adventure', country: 'south-korea', title: 'Seoul Adventure & Culture', price: '699', currency: '$' },

  // --- EUROPE ---
  { id: 'europe-hop', country: 'europe', title: 'Grand Europe Hop', price: '1,299', currency: '$' },

  // --- UNITED KINGDOM ---
  { id: 'london-royal', country: 'united-kingdom', title: 'Royal London Experience', price: '699', currency: '$' },

  // --- FRANCE ---
  { id: 'paris-romance', country: 'france', title: 'Parisian Romance', price: '799', currency: '$' },

  // --- ITALY ---
  { id: 'italian-classics', country: 'italy', title: 'Italian Classics', price: '999', currency: '$' },

  // --- USA ---
  { id: 'nyc-lights', country: 'united-states', title: 'New York City Lights', price: '899', currency: '$' },

  // --- AUSTRALIA ---
  { id: 'sydney-reef', country: 'australia', title: 'Sydney & The Reef', price: '1,199', currency: '$' },

  // --- MALDIVES ---
  { id: 'maldives-honeymoon', country: 'maldives', title: 'Luxury Honeymoon Escape', price: '2,499', currency: '$' },

  // --- FIJI ---
  { id: 'fiji-island-hop', country: 'fiji', title: 'Fiji Island Hopping', price: '1,299', currency: '$' },

  // --- INDONESIA ---
  { id: 'bali-bliss', country: 'indonesia', title: 'Bali Bliss & Culture', price: '599', currency: '$' },

  // --- SWITZERLAND ---
  { id: 'swiss-alps', country: 'switzerland', title: 'Grand Swiss Alps', price: '1,499', currency: '$' },

  // --- SINGAPORE ---
  { id: 'singapore-city', country: 'singapore', title: 'Singapore City Break', price: '699', currency: '$' },

  // --- SPAIN ---
  { id: 'spanish-fiesta', country: 'spain', title: 'Spanish Fiesta', price: '1,099', currency: '$' },

  // --- CANADA ---
  { id: 'canadian-rockies', country: 'canada', title: 'Canadian Rockies Adventure', price: '1,599', currency: '$' },

  // --- DEFAULTS ---
  { id: 'city-explorer', country: 'default', title: 'City Explorer Package', price: '299', currency: '$' },
  { id: 'nature-adventure', country: 'default', title: 'Nature & Adventure', price: '349', currency: '$' },
  { id: 'cultural-heritage', country: 'default', title: 'Cultural Heritage Tour', price: '279', currency: '$' }
];

// --- MAIN FUNCTIONS ---

/**
 * SERVE DATA TO WEBSITE
 * GET requests return the entire pricing list as JSON.
 */
function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);
    
    // Safety check - if sheet missing, try to set it up
    if (!sheet) {
      setupPricingSheet(); // Auto-heal
      sheet = doc.getSheetByName(SHEET_NAME);
    }

    var data = getDataFromSheet(sheet);

    return ContentService
      .createTextOutput(JSON.stringify({ 
        'status': 'success', 
        'data': data
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * ONE-TIME SETUP FUNCTION
 * Run this manually from the editor to create sheets and headers.
 */
function setupPricingSheet() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Setup Pricing Sheet
  var sheet = doc.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = doc.insertSheet(SHEET_NAME);
  }
  
  // Headers
  var headers = ['Package ID', 'Country', 'Package Title', 'Price', 'Currency', 'Last Updated'];
  var currentHeader = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  
  // If headers are empty or mismatch, reset them
  if (currentHeader[0] === "" || currentHeader.length < headers.length) {
    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f4f6");
    sheet.setFrozenRows(1);
    
    // Initial Population
    var rows = INITIAL_DATA.map(function(item) {
      return [item.id, item.country, item.title, item.price, item.currency, new Date()];
    });
    
    if (rows.length > 0) {
      sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
    }
    
    // Formatting
    sheet.autoResizeColumns(1, 6);
  }

  // 2. Setup Log Sheet (Optional but good for errors)
  var logSheet = doc.getSheetByName(LOG_SHEET_NAME);
  if (!logSheet) {
    logSheet = doc.insertSheet(LOG_SHEET_NAME);
    logSheet.appendRow(['Timestamp', 'Action', 'Details']);
    logSheet.getRange(1, 1, 1, 3).setFontWeight("bold");
    logSheet.setFrozenRows(1);
  }

  Logger.log("Setup Complete! 'Destinations Pricing' sheet created and populated.");
}


/**
 * Helper: Read all rows and convert to Array of Objects
 */
function getDataFromSheet(sheet) {
  var rows = sheet.getDataRange().getValues();
  var jsonData = [];

  // Start from Row 2 (index 1) to skip headers
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var id = row[0]; // Package ID
    
    if (!id || id === "") continue; // Skip empty rows

    jsonData.push({
      id: row[0],
      country: row[1],
      title: row[2],
      price: row[3],
      currency: row[4]
    });
  }
  return jsonData;
}
