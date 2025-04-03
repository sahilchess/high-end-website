document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadContent(targetPage);
        });
    });

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
                const script = document.createElement('script');
                script.src = 'script.js';
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error loading content:', error));
    }
});
