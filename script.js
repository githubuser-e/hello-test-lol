// Initial names array (customizable)
let names = ["Alice", "Bob", "Charlie", "Diana"];

// Function to display names when 'Explore' is clicked
function showNames() {
    const namesContainer = document.getElementById('names-container');
    const nameList = document.getElementById('name-list');

    // Clear the list first
    nameList.innerHTML = '';

    // Add each name to the list
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });

    // Display the names container
    namesContainer.style.display = 'block';
}

// Function to add a new name
function addName() {
    const newName = prompt('Enter a new name:');
    if (newName) {
        names.push(newName);
        showNames();
    }
}

