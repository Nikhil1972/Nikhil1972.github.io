document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Check if the link is an internal link (starts with #)
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Prevent default behavior for internal links

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smoothly scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        }
        // If it's an external link (e.g., about.html, projects.html), allow default behavior
    });
});