$(document).ready(function () {
    // Get data from JSON file. Can get it directly unlike in activity 13
    $.getJSON("facultyList.json", function (data) {
        // For each faculty member in the JSON file
        $.each(data, function () {
            $.each(this, function (key, value) {
                // Add to "faculty" div in html
                $("#faculty").append(
                    // Adding info for each faculty member to the html
                    "<img src=" + " " + value.image + "><br>" +
                    "<h2>" + value.full_name + "</h2>" +
                    "<h3>" + value.department + "</h3>" +
                    "<p>" + value.bio + "</p>"
                );
            });
        });
    });
});