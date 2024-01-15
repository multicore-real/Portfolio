// Load projects on load
focusProjects();

function focusProjects()
{
    // Modify UI
    document.querySelector('#projects-page-button').classList.add('selected-page');
    document.querySelector('#photos-page-button').classList.remove('selected-page');

    // Load content
    $('#projects-content').load('/components/projects.html');
}

function focusPhotos()
{
    // Modify UI
    document.querySelector('#projects-page-button').classList.remove('selected-page');
    document.querySelector('#photos-page-button').classList.add('selected-page');

    // Load content
    $('#projects-content').load('/components/photos.html');
}
