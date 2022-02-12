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
    var foodPerDragon = prompt("Enter the number of enclosures"); 
    foodPerDragon = parseFloat(foodPerDragon); 
    var dpe = numberDragons/foodPerDragon; 
    dpe = parseInt(dpe); 
    alert("Komodo Dragons Per Enclosure = " + dpe); 
}

function aveageDragonAge()
{
    var entry; 
    var averageAge; 
    var total = 0; 

    entry = prompt("Enter Komodo Dragon Age 1"); 
    var age1 = entry; 
    total = total + age1; 
    entry = prompt("Enter Komodo Dragon Age 2"); 
    var age2 = entry; 
    total = total + age2; 
    entry = prompt("Enter Komodo Dragon Age 3"); 
    var age3 = entry; 
    total = total + age3; 
    
    averageAge = (total/3);
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
    var dayOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    if(hour >= 12)
    {
        hour %= 12;
        dayOrNight = "pm";
    }
    else
    {
        dayOrNight = "am";
    }

    let fullTimeDate = "Today is " + hour + ":" + minute + dayOrNight + " on " + dayOfTheWeek[day] + ", " + date + " " + monthName[monthNumber] + " " + year;
    document.getElementById("timeoutput").innerHTML = fullTimeDate;
}

function dragonFoodCost()
{
    var numberDragons = prompt("Enter the number of Komodo Dragons"); 
    numberDragons = parseFloat(numberDragons);
    var foodPerDragon = prompt("Enter the number of pounds of food each Komodo Dragon needs"); 
    var costPerPound = prompt("Enter the price of a pound of Komodo Dragon food"); 
    var totalCost = numberDragons * foodPerDragon * costPerPound;  
    alert("Cost of Komodo Dragon Food = $" + totalCost); 
}