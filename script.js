    // Toggle hamburger menu and search bar visibility
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchBar.classList.toggle('active'); // Toggle the search bar visibility
    });