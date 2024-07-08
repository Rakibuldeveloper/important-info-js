// 1. Accessing elements:

// Get element by ID: This is the most common way to target a specific element with a unique ID.
const heading = document.getElementById('main-heading');
console.log(heading.textContent); // This will print the text content of the element


// Get elements by class name: This retrieves a collection of elements with the same class.
const buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.style.backgroundColor = 'lightblue'; // Change background color of all buttons
}


// Get elements by tag name: This returns all elements with a specific HTML tag like div, p, etc.
const images = document.getElementsByTagName('img');
for (let image of images) {
  if (image.alt === '') { // Check if image has alt text
    image.alt = 'Image description'; // Add alt text if missing
  }
}





// 2. Modifying content:

// Change text content: Update the text displayed within an element.
const paragraph = document.getElementById('description');
paragraph.textContent = 'This is the updated description content.';


// Set inner HTML: Replace the entire content of an element, including its child elements.
const list = document.querySelector('ul'); // Select using querySelector
list.innerHTML = '<li>Item 1</li><li>Item 2</li>'; // Add new list items





// 3. Adding elements:

// Create a new element:
const newElement = document.createElement('h2');
newElement.textContent = 'New heading';


// Append element to another element:
const mainContent = document.getElementById('content');
mainContent.appendChild(newElement); // Add the new heading to the content area




// 4. Removing elements:

// Remove child element:
const parent = document.getElementById('product-list');
const childToRemove = parent.firstElementChild; // Select the first child
parent.removeChild(childToRemove); // Remove the child element






// 5. Using classList property:

// This is the preferred method as it provides a safer and more modern approach. The classList property returns a DOMTokenList object containing the class names of the element. You can then use the add method to add a new class.
const element = document.getElementById('myElement');
element.classList.add('newClass'); // Add the class 'newClass'



// 6. Using className property:

// This method directly modifies the className property of the element, which is a string containing all space-separated class names. However, you need to be cautious when adding multiple classes or modifying existing ones
const elements = document.getElementById('myElement');
elements.className += ' newClass'; // Add a space before the new class name

// To add multiple classes at once (assuming they don't already exist)
elements.className = 'existingClass newClass anotherClass';


// 7. DOM working with form input
`
    <input id="num1"/>
    <input id="num2"/>
    <button onclick="addTwoNumbers()">Add<button/>
`
function addTwoNumbers(params) {
    let x = document.getElementById(num1).value;
    let y = document.getElementById(num2).value;
    let z = parseInt(num1) + parseInt(num2);  //  remeber a input always give you string so convert intiger

    alert(z)
}

