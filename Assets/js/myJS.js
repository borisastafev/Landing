// Initialize here and run showSlide() to give to lightbox a default state.

    let slideIndex = 1;
    showSlide(slideIndex);

    // I`m providing the functionality for clickable content, which is 
    // previews, dots, controls and the close button.

    function openLightbox() {
        document.getElementById('Lightbox').style.display = 'block';
    }

    function closeLightbox() {
        document.getElementById('Lightbox').style.display = 'none';
    };

    //assigning new values here to our slidIndex.

    function changeSlide(n) {
        showSlide(slideIndex += n);
    };

    function toSlide(n) {
        showSlide(slideIndex = n);
    };


    // logic for the lightBox. It will decide which slide to 
    // show and which dot is active.

    function showSlide(n) {
        const slides = document.getElementsByClassName('slide');

        if (n < 1) {
            slideIndex = slides.length
        }

        if (n > slides.length) {
            slideIndex = 1
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };

        slides[slideIndex - 1].style.display = 'block';
    }
    
// Toggle website theme
    const checkbox = document.querySelector("#checkbox");

    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        });

    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("ul");

    function openMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    hamburger.addEventListener('click', openMenu)


const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}