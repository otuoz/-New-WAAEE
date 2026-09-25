/**
 * WAAEE Expo 2027 — form submission backend.
 *
 * Setup
 * 1. Create one Google Spreadsheet with three tabs: Visitors, Exhibitors, Partners.
 * 2. Extensions > Apps Script, paste this file, set SPREADSHEET_ID, ORGANISER_EMAIL and SHARED_TOKEN.
 * 3. Deploy > New deployment > Web app: Execute as "Me", Who has access "Anyone".
 * 4. Copy the /exec URL into the website environment variables:
 *      GOOGLE_APPS_SCRIPT_URL   = https://script.google.com/macros/s/.../exec
 *      GOOGLE_APPS_SCRIPT_TOKEN = the same value as SHARED_TOKEN below
 *    The website calls this endpoint from the server only, so no credentials reach the browser.
 */

var SPREADSHEET_ID = 'PUT_YOUR_SPREADSHEET_ID_HERE';
var ORGANISER_EMAIL = 'waaeenig@gmail.com';
var SHARED_TOKEN = 'PUT_A_LONG_RANDOM_STRING_HERE';

var HEADERS = [
  'Submission ID',
  'Date and Time',
  'Full Name',
  'Email',
  'Phone',
  'Organization / Company',
  'Form Information',
  'Submission Status'
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);

    if (SHARED_TOKEN && payload.token !== SHARED_TOKEN) {
      return json({ ok: false, error: 'unauthorized' });
    }

    var sheetName = ['Visitors', 'Exhibitors', 'Partners'].indexOf(payload.sheet) > -1
      ? payload.sheet
      : 'Visitors';

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var timestamp = payload.submittedAt
      ? Utilities.formatDate(new Date(payload.submittedAt), 'Africa/Lagos', 'yyyy-MM-dd HH:mm:ss')
      : Utilities.formatDate(new Date(), 'Africa/Lagos', 'yyyy-MM-dd HH:mm:ss');

    var details = payload.details || {};
    var detailLines = [];
    for (var key in details) {
      if (details.hasOwnProperty(key) && String(details[key]).length) {
        detailLines.push(key + ': ' + details[key]);
      }
    }

    sheet.appendRow([
      payload.submissionId || '',
      timestamp,
      payload.fullName || '',
      payload.email || '',
      payload.phone || '',
      payload.organization || '',
      detailLines.join('\n'),
      payload.status || 'New'
    ]);

    notifyOrganiser(payload, timestamp, detailLines);

    return json({ ok: true, submissionId: payload.submissionId });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function notifyOrganiser(payload, timestamp, detailLines) {
  var subject = 'WAAEE Expo 2027 — new ' + (payload.formLabel || 'submission') + ' — ' + (payload.fullName || '');
  var body = [
    'A new submission has been received on www.waaee.com.ng',
    '',
    'Type of submission: ' + (payload.formLabel || ''),
    'Applicant name: ' + (payload.fullName || ''),
    'Email: ' + (payload.email || ''),
    'Phone: ' + (payload.phone || ''),
    'Organization: ' + (payload.organization || '—'),
    'Submitted: ' + timestamp + ' (Lagos time)',
    'Submission ID: ' + (payload.submissionId || ''),
    '',
    'Submitted information:',
    detailLines.join('\n')
  ].join('\n');

  MailApp.sendEmail({ to: ORGANISER_EMAIL, subject: subject, body: body, replyTo: payload.email || undefined });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return json({ ok: true, service: 'WAAEE Expo submissions' });
}
