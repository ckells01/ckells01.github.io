
//const $ = selctor => document.querySelector(selctor);
/** 
"use strict";
$(document).ready(() => {

    let imageCashe = [];
    $("#slides img").each((index, img) => {
        const image = new Image();
        image.src = $(img).attr("src");
        image.title = $(img).attr("alt");
        imageCashe[index] = image;
    });

    let imageCounter = 0;
    setInterval(() => {
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {
                imageCounter = (imageCounter + 1) % imageCashe.length;
                const nextImage = imageCashe[imageCounter];
                $("#slide").attr("src", nextImage.src).fadeIn(1000);
                $("#caption").text(nextImage.title).fadeIn(1000);
            });
    },
        3000);
}); 
*/


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