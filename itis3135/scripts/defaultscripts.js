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
    var size1 = entry; 
    total = total + size1; 
    entry = prompt("Enter Komodo Dragon Age 2"); 
    var size2 = entry; 
    total = total + size2; 
    entry = prompt("Enter Komodo Dragon Age 3"); 
    var size3 = entry; 
    total = total + size3; 
    
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

function dragonWeightInPounds()
{
    var entry;
    entry = prompt("Enter Komodo Dragon Weight in Ounces"); 
    var weightInOz = entry;    
    WeightInLbs = weightInOz/16;
    alert("Komodo Dragon Weight in Pounds = " + WeightInLbs + " Lbs");
}

function aveageDragonSizeInches()
{
    var entry; 
    var averageSizeInches; 
    var total = 0; 

    entry = prompt("Enter Komodo Dragon 1's size in inches"); 
    var size1 = entry; 
    total = total + size1; 
    entry = prompt("Enter Komodo Dragon 2's size in inches"); 
    var size2 = entry; 
    total = total + size2; 
    entry = prompt("Enter Komodo Dragon 3's size in inches"); 
    var size3 = entry; 
    total = total + size3;
    entry = prompt("Enter Komodo Dragon 4's size in inches"); 
    var size4 = entry; 
    total = total + size4; 
    
    averageSizeInches = (total/4);
    alert("Average Komodo Dragon Size = " + averageSizeInches + " Inches");
}