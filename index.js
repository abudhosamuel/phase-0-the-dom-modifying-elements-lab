// Write your code here!
// Remove the existing main element from the DOM
document.querySelector('main').remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id attribute of the new h1 element
newHeader.id = 'victory';

// Set the text content of the new h1 element
newHeader.textContent = 'Samuel is the champion';

// Append the new h1 element to the DOM
document.body.appendChild(newHeader);
