# 📊 Google Sheets Pricing Integration Guide (Detailed)

This guide will help you connect your website to a Google Sheet so you can update prices instantly without changing code.

## 🗺️ What's Included?
This integration covers all **24 regions** and **50+ packages**:
*   **Asia**: Japan, Philippines, Nepal, Sri Lanka, India, China, Thailand, Vietnam, UAE (Dubai), South Korea, Maldives, Indonesia, Singapore.
*   **Europe**: Europe (General), UK, France, Italy, Spain, Switzerland.
*   **Americas**: USA, Canada.
*   **Oceania**: Australia, Fiji.

---

## ✅ Step 1: Create the Google Sheet & Script

1.  Open your browser and go to: [https://sheets.new](https://sheets.new)
2.  Name your spreadsheet **"GlobeHoppers Pricing"** (top left corner).
3.  Go to **Extensions** > **Apps Script**.
4.  A new tab will open with a code editor.
5.  **Delete any code** currently in the editor (Ctrl+A, Delete).
6.  **Copy the entire code from `GoogleAppsScript_Pricing.gs`** in your project and paste it here.
    *(The file is located in your project folder at `d:\priorate venture clients\3d-rotating-earth draft 3 best\GoogleAppsScript_Pricing.gs`)*

7.  Click the **Save** icon (floppy disk) or press `Ctrl + S`. Name the project "Pricing API".

## ✅ Step 2: Run Setup (First Time Only)

1.  In the Apps Script editor, look at the toolbar at the top.
2.  Select `setupPricingSheet` from the function dropdown (it might say `doGet` by default).
3.  Click **Run**.
4.  **Authorization Required**:
    *   Click **Review Permissions**.
    *   Choose your Google Account.
    *   Click **Advanced** (small text bottom left).
    *   Click **Go to Pricing API (unsafe)** (It is safe, it's your own script).
    *   Click **Allow**.
5.  Go back to your Google Sheet tab. You should now see two sheets: **"Destinations Pricing"** and **"System Logs"**, fully populated with all **50+ packages**!

## ✅ Step 3: Deploy as Web App (Crucial Step)

1.  In the Apps Script editor, click **Deploy** (blue button top right) > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  Fill in these details:
    *   **Description**: "v1"
    *   **Execute as**: `Me (your email)`
    *   **Who has access**: `Anyone` (**Important**: This allows your website to read the prices securely)
4.  Click **Deploy**.
5.  **Copy the Web App URL** (it starts with `https://script.google.com/macros/s/...`).

## ✅ Step 4: Connect Your Website

1.  Open your project file: `d:\priorate venture clients\3d-rotating-earth draft 3 best\utils\googleSheets.ts`
2.  Find the line:
    ```typescript
    const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYMENT_URL_HERE';
    ```
3.  **Paste your Web App URL** inside the quotes.
4.  Save the file.

## 🚀 That's It!

*   **To Update Prices**: Just edit the "Price" column in the "Destinations Pricing" sheet. Your website will update automatically on refresh!
*   **New Packages**: You can add new rows to the sheet with new Package IDs, and they will be picked up if your code references them.
