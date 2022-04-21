$(document).ready(function () {
    // list of speakers
    $("#nav_list li").click(function () {
        // find title of json file for speaker
        let title = $(this).children("a").attr("title");
        // find json file
        $.get(title + ".json", function (data, status) {
            // get data from json files and output on html
            data = data['speakers'][0];
            $("main h1").html(data['title']);
            $("main h2").html(data['month']);
            $("main h3").html(data['speaker']);
            $("main img").attr("src", data.image);
            $("main p").html(data.text);
        });
    });
}); // end ready