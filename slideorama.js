"use strict";

(function() {
    var counter = 0;
    var presentation = document.getElementById("presentation");
    var slides = document.getElementById("slide-container").children;
    var numberOfSlides = slides.length;
    var timerInterval;
    var timer;

    document.addEventListener("keyup", keyPressed);

    function keyPressed(key) {
        if (key.code === "Enter" || key.code === "ArrowRight" || key.code === "ArrowLeft") {
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
    }

    function showSlide(index) {
        presentation.innerHTML = slides[index].outerHTML;
        clearInterval(timerInterval);
        addTimer();
    }

    function addTimer() {
        timer = presentation.getElementsByClassName("timer");
        if (timer[0]) {
            timer = timer[0];
            timer.innerHTML = timer.dataset.time;

            timerInterval = setInterval(reduceTime, 1000);
        }
    }

    function reduceTime() {
        var currentTime = timer.innerHTML.split(":");
        var minutes = parseInt(currentTime[0]);
        var seconds = parseInt(currentTime[1]);

        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }

        var newTime = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
        timer.innerHTML = newTime;

        if (minutes < 0) {
            clearInterval(timerInterval);
            timer.innerHTML = "";
        }
    }

    showSlide(counter);
})();
