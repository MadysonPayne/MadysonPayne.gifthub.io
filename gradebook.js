function populateGradebook(data) (
/ This function will take the fetched grade data and populate the table console.log("Populating gradebook with data:", data);
let tableElm = document-getelementById("gradebook");
// Get the gradebook table element
data. forEach(function(assignment) // For each row of data we're passed in
let row = document.createElement("tr"); // create a table row element
let columns = []; // Handy place to stick the columns of information
columns name = document.createElement('td'); // The first column's table data will be the name
columns.name.appendChild(
// Concatenate the full name: "last_name, first_name"
document. createTextNode(assignment. last_name +"," + assignment.first_name)
);
columns-grade = document.createElement('td'); // second column will be the grade
columns-grade.appendChild(
Just put the name in text, you could be fancy and figure out the lter grade here
// with either a bunch of conditions, or a JavaScript "switch" statemen
document .createTextNode(assignment.total_grade)
// Add the table data columns to the table row
row.appendChild(columns.name);
row.appendChild(columns grade);
// Add the row to the table itself to make the data visible
tableElm. appendChild(row);
