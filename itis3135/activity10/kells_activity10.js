$(document).ready(function () {

        // Make vars so it is easier to use "href" and "title"
        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // preload images
        $("#image_list a").each(function () {
                var galleryImage = new Image();
                galleryImage.src = imageURL
        });

        // set up event handlers for links  
        $("#image_list a").click(evt => {
                // find out what image was clicked
                $("#image").attr("src", imageURL);
                // swap caption
                $("#caption").fadeOut(1000, function () {
                        $("#caption").text(caption).fadeIn(1000);
                });
                // swap image
                $("#image").fadeOut(1000, function () {
                        $("#image").attr("src", imageURL).fadeIn(1000);
                });
                // cancel the default action of the link
                evt.preventDefault();
        }); // end click

        // move focus to first thumbnail
        $("li:first-child a").focus();

}); // end ready