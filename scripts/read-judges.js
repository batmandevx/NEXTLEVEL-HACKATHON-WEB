const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const excelFile = path.join(__dirname, '..', 'Event Feedback (Responses) (1).xlsx');
const workbook = XLSX.readFile(excelFile);

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const data = XLSX.utils.sheet_to_json(worksheet);

console.log('Total rows:', data.length);

// Extract judge information with correct column names
const judges = data.map((row, index) => {
  // Get the full name and extract initials
  const fullName = row['  Full Name '] || row['Full Name'] || '';
  const name = fullName.trim();
  
  // Extract initials (first letter of first and last name)
  const nameParts = name.split(' ').filter(p => p.length > 0);
  let initials = '';
  if (nameParts.length >= 2) {
    initials = (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
  } else if (nameParts.length === 1) {
    initials = nameParts[0].substring(0, 2).toUpperCase();
  }

  // Get LinkedIn URL
  let linkedin = row['LinkedIn Profile '] || row['LinkedIn Profile'] || row['LinkedIn'] || '';
  linkedin = linkedin.trim();
  
  // Add https:// if missing
  if (linkedin && !linkedin.startsWith('http')) {
    linkedin = 'https://' + linkedin;
  }

  // Get headshot photo URL
  let photo = row['  Headshot Photo  '] || row['Headshot Photo'] || '';
  photo = photo.trim();

  return {
    id: `j${String(index + 1).padStart(2, '0')}`,
    initials,
    name,
    linkedin,
    email: (row['  Email Address  '] || row['Email Address'] || '').trim(),
    role: (row['Current Role / Title '] || row['Current Role / Title'] || '').trim(),
    org: (row['Organization / Company '] || row['Organization / Company'] || row['Organization / Affiliation  '] || '').trim(),
    photo: photo || null,
  };
}).filter(j => j.name.length > 0); // Filter out empty rows

console.log('\n\nExtracted Judges:');
console.log(JSON.stringify(judges, null, 2));

// Save to a JSON file
fs.writeFileSync(
  path.join(__dirname, '..', 'judges-data.json'),
  JSON.stringify(judges, null, 2)
);

console.log('\n\nSaved to judges-data.json');
console.log(`Total judges extracted: ${judges.length}`);
