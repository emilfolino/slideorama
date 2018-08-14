"use strict";

(function() {
    var counter = 0;
    var presentation = document.getElementById("presentation");
    var slides = document.getElementById("slide-container").children;
    var numberOfSlides = slides.length;

    function showSlide(index) {
        presentation.innerHTML = slides[index].outerHTML;
    }

    showSlide(counter);
})();
