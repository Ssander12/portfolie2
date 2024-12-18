let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slides");

    // Skjul alle bilder
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Vis neste bilde og legg til fade-effekt
    slides[slideIndex].style.display = "block";
    slides[slideIndex].style.animation = "fade 2s";

    // Automatisk bytte bilde hvert 3. sekund
    setTimeout(() => {
        slideIndex = (slideIndex + 1) % slides.length; // Neste bilde
        showSlides();
    }, 3000);
}

// Bytter til neste bilde manuelt ved klikk
function nextSlide() {
    const slides = document.getElementsByClassName("slides");
    slides[slideIndex].style.display = "none"; // Gjeldende bilde bort
    slideIndex = (slideIndex + 1) % slides.length; // Neste bilde
    slides[slideIndex].style.display = "block";
    slides[slideIndex].style.animation = "fade 0.5s"; // Kortere fade ved klikk
}

// Start slideshow
showSlides();
