let slideIndex = 1;
showSlides(slideIndex);
autoShowSlides();

function currentSlide(x) {
    showSlides(slideIndex = x);
}

function plusSlides(i) {
    showSlides(slideIndex += i);
}

function showSlides(x) {

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (x > slides.length) {
        slideIndex = 1;
    }

    if (x < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoShowSlides() {
    showSlides(slideIndex);
    slideIndex++;
    setTimeout(autoShowSlides, 2000);
}