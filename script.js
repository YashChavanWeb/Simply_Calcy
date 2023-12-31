// Get the input box element and all button elements
const input = document.querySelector('.input-box');
const buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input expression
let string = "";

// Convert the NodeList of buttons to an array
let collection = Array.from(buttons);

// Iterate through each button in the array
collection.forEach(function (button) {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // Try to perform the following actions, catch and handle errors if any
        try {
            // If the clicked button is '=', evaluate the expression and display the result
            if (e.target.innerHTML === '=') {
                string = eval(string);
                input.value = string;
            } 
            // If the clicked button is 'AC', clear the input string
            else if (e.target.innerHTML === 'AC') {
                string = "";
                input.value = string;
            } 
            // If the clicked button is 'DEL', remove the last character from the input string
            else if (e.target.innerHTML === 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } 
            // For other buttons, append their content to the input string
            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        } 
        // If an error occurs during evaluation, display "Error" in the input box
        catch (error) {
            input.value = "Error";
        }
    });
});
