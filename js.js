'use strict';

function Make_a_slideshow(id, time) {
    var slideIndex = 0,
        container = document.getElementById(id);

    function showSlides() {
        var slides = container.querySelectorAll('.mySlides');
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, time); // Change image every 'time' seconds
    }
    showSlides();
}

//start slideshow with different time changing
Make_a_slideshow('slideLetterJ', 1000);
Make_a_slideshow('slideLetterO', 1300);
Make_a_slideshow('slideLetterA', 1500);
Make_a_slideshow('slideSecondLetterO', 1700);