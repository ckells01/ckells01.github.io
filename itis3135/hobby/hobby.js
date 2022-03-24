window.onload = function () {
    document.getElementById("genre_response").onclick = genreResponse;
};

function openTab(event, tabNum) {

    var i;
    var tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }

    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className += " active";
}

//document.getElementById("defaultOpen").click();

function genreResponse() {

    var response = document.getElementById("genre_response");
    if (response == "yes") {
        document.getElementById("genre_msg").innerHTML = "Thats awesome! I hope you enjoyed!";
    }
    if (response == "no") {
        document.getElementById("genre_msg").innerHTML = "You should go listen! I hope you enjoy!";
    }

}