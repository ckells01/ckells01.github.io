/**
$(document).ready(function () {
        $("#image_list a").each(function () {

                var imageURL = $(this).attr("href");
                var caption = $(this).attr("title");

                // preload the image for each link
                var galleryImage = newImage();
                galleryImage.src = imageURL;

                // set up the event handlers for each link
                $(this).click(function (evt) {
                        $("#caption, #image").slideUp(2000,
                                function () {
                                        $("#image").attr("src", imageURL);
                                        $("#caption").text(caption);
                                        $("#caption. #image").slideDown(2000);
                                });

                        // cancel the default action of each link
                        evt.preventDefault();
                });

        });
        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready
*/

$(document).ready(function () {
    // preload images
    $("#image_list a").each(function () {
        var galleryImage = new Image();
        galleryImage.src = $(this).attr("href");
    });

    // set up event handlers for links  
    $("#image_list a").click(function (evt)
    {
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);
        var caption = $(this).attr("title");
        $("#caption").fadeOut(1000, function ()
        {
            $("#caption").text(caption).fadeIn(1000);
        });
        $("#image").fadeOut(1000, function ()
        {
            $("#image").attr("src", imageURL).fadeIn(1000);
        });
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    // move focus to first thumbnail
    $("li:first-child a").focus();
}); // end ready