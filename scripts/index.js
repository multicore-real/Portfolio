// Preload images on load, then focus projects
// I kinda hate how this looks, but it is somewhat necessary for the preloading to really work
$('#preload-projects').load('/components/projects.html', () => focusProjects());
$('#preload-photos').load('/components/photos.html');

function focusProjects()
{
    // Modify UI
    document.querySelector('#projects-page-button').classList.add('selected-page');
    document.querySelector('#photos-page-button').classList.remove('selected-page');

    // Load content
    document.querySelector('#projects-content').innerHTML = document.querySelector('#preload-projects').innerHTML;
}

function focusPhotos()
{
    // Modify UI
    document.querySelector('#projects-page-button').classList.remove('selected-page');
    document.querySelector('#photos-page-button').classList.add('selected-page');

    // Load content
    document.querySelector('#projects-content').innerHTML = document.querySelector('#preload-photos').innerHTML;
}

// Save the scroll position to sessionStorage every time it changes
// Use sessionStorage instead of localStorage to automatically clear it when the user session ends
window.onscroll = () =>
{
    sessionStorage['scrollPosition'] = window.scrollY;
}

// When the page loads, check if it should go to the last scroll position
const urlParams = new URLSearchParams(window.location.search); // Get URL parameters
if (urlParams.has('scroll') && sessionStorage['scrollPosition']) // Make sure user has scroll parameter and scroll value
{
    window.scrollTo({ top: sessionStorage['scrollPosition'], behavior: 'instant' });
}
