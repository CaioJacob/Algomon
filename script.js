// Modify the colour of mouse-over navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'red'; // Change the colour to red.
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = ''; // Restores original colour.
    });
});

// Creates a pop-up window when entering the page asking to download the game
window.onload = function() {
    alert('Welcome to Algomon! Click OK and download the game now.');
};

// Modify the colour of the text with the mouse over it.
document.querySelectorAll('.container p').forEach(paragraph => {
    paragraph.addEventListener('mouseover', function() {
        this.style.color = 'green'; // Change the colour to green.
    });
    paragraph.addEventListener('mouseleave', function() {
        this.style.color = ''; // Restores original colour.
    });
});
