"use strict";

(function() {
    var counter = 0;
    var presentation = document.getElementById("presentation");
    var slides = document.getElementById("slide-container").children;
    var numberOfSlides = slides.length;

    document.addEventListener("keyup", keyPressed);

    function keyPressed(key) {
        if (key.code === "Enter" || key.code === "ArrowRight") {
            counter++;
        }

        if (key.code === "ArrowLeft") {
            counter--;
        }

        if (counter > numberOfSlides - 1) {
            counter = 0;
        }

        if (counter < 0) {
            counter = numberOfSlides - 1;
        }

        showSlide(counter);
    }

    function showSlide(index) {
        presentation.innerHTML = slides[index].outerHTML;
    }

    showSlide(counter);
})();
