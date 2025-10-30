// Get the button and paragraph elements from the HTML
const changeTextBtn = document.getElementById('changeTextBtn');
const message = document.getElementById('message');

// Add an event listener to the button
changeTextBtn.addEventListener('click', function() {
    // Change the text content of the paragraph when the button is clicked
    message.textContent = "You clicked the button! 🎉";
});