let lastScrollPos = window.scrollY;

// On downward scroll, hide the navbar. On upward scroll, show the navbar
window.onscroll = () =>
{
    const currentScrollPos = window.scrollY;

    if (lastScrollPos < currentScrollPos && currentScrollPos > 50) document.querySelector("#header").style.transform = "translateY(-100%)";
    else document.querySelector("#header").style.transform = "translateY(0)";

    lastScrollPos = currentScrollPos;
}
