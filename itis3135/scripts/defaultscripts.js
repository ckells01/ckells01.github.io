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

function aveageDragonAge()
{
    var entry; 
    var averageAge; 
    var total = 0; 

    entry = prompt("Enter Komodo Dragon Age"); 
    entry = parseInt(entry); 
    var age1 = entry; 
    total = total + age1; 
    entry = prompt("Enter Komodo Dragon Age"); 
    entry = parseInt(entry); 
    var age2 = entry; 
    total = total + age2; 
    entry = prompt("Enter Komodo Dragon Age"); 
    entry = parseInt(entry); 
    var age3 = entry; 
    total = total + age3; 

    averageAge = parseInt(total/3);

    alert("Average Komodo Dragon Age = " + averageAge);
}