function startFireworks() {
    // Code to trigger fireworks effect
    // For example, if you're using the jQuery Fireworks plugin:
    $('body').fireworks();
}

// Call the function initially when the page loads
startFireworks();

// Set up an interval to call the function every 10 seconds (10000 milliseconds)
setInterval(startFireworks, 10000);
