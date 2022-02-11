function scriptTest()
{
    alert("My script is running!");
}

function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let fullwelcome = "The Charcoal Komodo Dragons welcome you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("output").innerHTML = fullwelcome;
}