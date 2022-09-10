// Import the table from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
	// Clear out any existing data.
	tbody.html("");

	// Loop through each object in the data
	// & Append a row and cells for each value in the row.
	data.forEach((dataRow) => {
		let row = tbody.append("tr");
		Object.values(dataRow).forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		});
	});
}


// Add function to filter data.
function handleClick() {
	// Tell d3 to look for datetime id in HTML and store its value in date variable.
	let date = d3.select("#datetime").property("value");
	// Set a default filter
	let filteredData = tableData;
	// Check to see if a date was entered & filter the data using that date.
	if (date) {
		filteredData = filteredData.filter(row => row.datetime === date);
	};
	// Build the table with the filtered data
	buildTable(filteredData);
}

// Click on the filter button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the unfiltered data when the web loads
buildTable(tableData);
