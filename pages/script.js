// Function to load content
function loadContent(page) {
    const contentDiv = document.getElementById('main-content');
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', page, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            contentDiv.innerHTML = xhr.responseText;
        } else {
            contentDiv.innerHTML = '<h1>Error loading page</h1>';
        }
    };
    
    xhr.send();
}

// Add event listeners to sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const page = this.getAttribute('href'); // Get the href attribute
        loadContent(page); // Load the content
    });
});
