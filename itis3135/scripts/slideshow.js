window.onload = function () {

"use strict";
$(document).ready(() => {

    let nextSlide = $("#slides img:first-child");

    setInterval( () => {
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                } else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
                $("#caption").text(nextCaption).fadeIn(1000);
            });
    }, 3000);
});
}