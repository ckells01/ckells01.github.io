/**
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
        // swaps image and caption by fading every 1 second  
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
*/

$(document).ready(function ()
{
    // preload images
    $("#image_list a").each(function ()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
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