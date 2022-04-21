$(document).ready(function () {
    // list of speakers
    $("nav_list li").click(function() {
        let title = $(this).children("a").attr("title");
        // find json file
        $.get(title + ".json", function (date, status) {
            // get data from json files and output on html
            data = data[speakers][0];
            $("main h1").html(data["title"]);
            $("main h2").html(data["month"]);
            $("main h3").html(data["speaker"]);
            $("main img").html("src", data.image);
            $("main p").html(data.text);
        });
    });
}); // end ready