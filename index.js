// Get the table element
const table = document.getElementById("checklist-table");

// Function to create a checkbox element
function createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    return checkbox;
}

// Function to add checkboxes to each row
function addCheckboxes() {
    const rows = table.getElementsByTagName("tr");

    // Start from index 1 to skip the header row
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const checkboxCell = document.createElement("td");
        const checkbox = createCheckbox();

        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // Attach a click event listener to the checkbox
        checkbox.addEventListener("click", function () {
            // You can handle the checkbox click event here
        });
    }
}

// Call the addCheckboxes function to add checkboxes when the page loads
addCheckboxes();

// Function to get the value of a specific cell in a row
function getCellValue(row, index) {
    return row.getElementsByTagName("td")[index].innerText.toLowerCase();
}

// Function to show or hide rows based on the search criteria
function applySearchFilter(filter) {
    const rows = table.getElementsByTagName("tr");

    // Start from index 1 to skip the header row
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cardNumber = getCellValue(row, 0);
        const cardName = getCellValue(row, 1);
        const rarity = getCellValue(row, 2);
        const category = getCellValue(row, 3);

        if (
            cardNumber.includes(filter) ||
            cardName.includes(filter) ||
            rarity.includes(filter) ||
            category.includes(filter)
        ) {
            row.style.display = ""; // Show the row if it matches the search
        } else {
            row.style.display = "none"; // Hide the row if it doesn't match the search
        }
    }
}

// Search functionality
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    applySearchFilter(filter);
});

// Function to handle text class click event
function goHome() {
    const textElements = document.getElementsByClassName("text");

    for (const element of textElements) {
        element.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
}

goHome();
