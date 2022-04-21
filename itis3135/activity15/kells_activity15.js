$(document).ready(function () {
    // Get data from JSON file. Can get it directly unlike in activity 13
    $.getJSON("facultyList.json", function (data) { 
        // For each faculty member in the JSON file
        $.each(data, function () {
            // Add to "faculty" div in html
            $("#faculty").append(
                "<img>" + value.image + "</img>" +
                "<h2>" + value.full_name + "</h1>" +
                "<h3>" + value.department + "</h1>" +
                "<p>" + value.bio + "</h1>"
            );
        });
    });
});