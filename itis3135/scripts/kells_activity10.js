
$(document).ready(function () {

        // preload images
        $("#image_list a").each(function () {
                var galleryImage = new Image();
                galleryImage.src = $(this).attr("href")
        });

        // set up event handlers for links
        // swaps image and caption by fading every 1 second  
        $("#image_list a").click(function (evt) {

                var imageURL = $(this).attr("href");
                var imageCaption = $(this).attr("title");

                // find out what image was clicked
                // $("#image").attr("src", imageURL);

                // swap caption
                $("#caption").fadeOut(1000, function () {
                        $("#caption").text(imageCaption).fadeIn(1000);
                });

                // swap image
                $("#image").fadeOut(1000, function () {
                        $("#image").attr("src", imageURL).fadeIn(1000);
                });

                // cancel the default action of the link
                evt.preventDefault();

        });

        // move focus to first thumbnail
        $("li:first-child a").focus();

}); // end ready

// used w3schools article to learn how to use fadeOut/fadeIn
// used textbook to learn how to preload images, move focus to first thumbnail,
// cancel the default action of the link, and use callback function