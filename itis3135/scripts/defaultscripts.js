function scriptTest()
{
    alert("My script is running!");
}

function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let fullWelcome = "The Charcoal Komodo Dragons welcome you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("welcomeoutput").innerHTML = fullWelcome;
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

function timeAndDate()
{
    var current = new Date();
    var monthNumber = current.getMonth() + 1;
    var day = current.getDay();
    var year = current.getFullYear();  
    var date = current.getDate();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var dayOrNight;

    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayOfTheWeek = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

    if(hour >= 12)
    {
        hour %= 12;
        dayOrNight = "pm";
    }
    else
    {
        dayOrNight = "am";
    }

    let fullTimeDate = "Today is " + hour + ":" + minute + dayOrNight + " on " + dayOfTheWeek[day] + ", " + date + " " + monthName[monthNumber] + " " + year
    document.getElementById("timeoutput").innerHTML = fullTimeDate;
}