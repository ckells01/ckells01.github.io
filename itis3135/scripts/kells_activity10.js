
$(document).ready(function () {

        // preload images
        $("#image_list a").eacg( (index, link) => { //.each(function () {    
                var galleryImage = new Image();
               // galleryImage.src = $(this).attr("href")
                 galleryImage.src = link.href
        });

        // set up event handlers for links
        // swaps image and caption by fading every 1 second  
        $("#image_list a").click(function (evt) {
                /**
                // cancel the default action of the link
                evt.preventDefault();
                // find out what image was clicked
                var imageURL = $(this).attr("href");
                $("#image").attr("src", imageURL);
                // swap caption
                var caption = $(this).attr("title");
                $("#caption").fadeOut(1000, function () {
                        $("#caption").text(caption).fadeIn(1000);
                });
                // swap image
                $("#image").fadeOut(1000, function () {
                        $("#image").attr("src", imageURL).fadeIn(1000);
                });
                */

                const link = evt.currentTarget;
                $("#image").attr("src", link.href);
                $("#caption").text(link.title);
                evt.preventDefault();


        }); // end click

        // move focus to first thumbnail
        $("li:first-child a").focus();

}); // end ready