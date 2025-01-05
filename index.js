// Animation for the first image (class "one")
anime({
    targets: '.one',
    opacity: [0, 1], // Fade in
    translateY: [300, 0], // Move from bottom to original position
    easing: 'easeOutQuad',
    duration: 100,
    delay: 400, // Delay for the first image to come later
});

anime({
    targets: '.two',
    opacity: [0, 1], // Fade in
    translateY: [200, 0], // Move from bottom to original position
    easing: 'easeOutQuad',
    duration: 100,
    delay: 700, // Delay for the first image to come later
});

anime({
    targets: '.three',
    opacity: [0, 1], // Fade in
    translateY: [200, 0], // Move from bottom to original position
    easing: 'easeOutQuad',
    duration: 100,
    delay: 500, // Delay for the first image to come later
});

anime({
    targets: '.four',
    opacity: [0, 1], // Fade in
    translateY: [200, 0], // Move from bottom to original position
    easing: 'easeOutQuad',
    duration: 100,
    delay: 900, // Delay for the first image to come later
});

anime({
    targets: '.five',
    opacity: [0, 1], // Fade in
    translateY: [200, 0], // Move from bottom to original position
    easing: 'easeOutQuad',
    duration: 100,
    delay: 1000, // Delay for the first image to come later
});

anime({
    targets: '.six',
    opacity: [0, 1], // Fade in
    translateY: [100, 0], // Move from bottom to original position
    easing: 'easeOutQuad',
    duration: 100,
    delay: 1100, // Delay for the first image to come later
});


function showDetails(detailId) {
    // Hide all sections on the page except the background video and images container
    const allSections = document.querySelectorAll('section');
    allSections.forEach(function(section) {
        // Hide all sections except the movie details
        if (!section.classList.contains('movie-details')) {
            section.style.display = 'none'; // Hide all except the movie details
        }
    });

    // Show the selected movie details
    const selectedDetail = document.getElementById(detailId);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}

function showDetails(detailId, backgroundImage) {
    // Hide all movie details sections
    const allDetails = document.querySelectorAll('.movie-details');
    allDetails.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the clicked movie's details
    const selectedDetail = document.getElementById(detailId);
    if (selectedDetail) {
        selectedDetail.style.display = 'flex';
        selectedDetail.style.backgroundImage = `url(${backgroundImage})`;
    }
}


// Function to go back to the homepage
function goBack() {
    window.location.href = "index.html";  // Replace with the actual home page URL
}


