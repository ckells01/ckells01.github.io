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

function dragonsPerEnclosure()
{
    var numberDragons = prompt("Enter the number of Komodo Dragons"); 
    numberDragons = parseFloat(numberDragons); 
    var numberEnclosures = prompt("Enter the number of enclosures"); 
    numberEnclosures = parseFloat(numberEnclosures); 
    var dpe = numberDragons/numberEnclosures; 
    dpe = parseInt(dpe); 
    alert("Dragons Per Enclosure = " + dpe); 
}