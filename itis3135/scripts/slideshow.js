
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

/**
$("#slide").attr("src","second.jpg");

$('#slide').on({
    'click': function(){
        $('#slide').attr('src','second.jpg');
    }
});
*/