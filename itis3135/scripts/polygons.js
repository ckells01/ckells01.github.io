function getNumSides() // Take input number from user for number of sides on a polygon
{
    var sideNumber = parseInt(prompt("The Charcoal Komodo Dragon wants your number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    // Takes user input and saves it as an var

    var validatedSides = validateEntry(sideNumber); // Calls function to valiadte input
    var result = polygonName(validatedSides); // Calls function to find name based on input
    alert(result); // Alert with name

}

function validateEntry(sideNumber) // Validates user input
{
    while (isNaN(sideNumber) || sideNumber < -10 || sideNumber> 10)
    {
        sideNumber = parseInt(prompt("That is not a valid number! Please enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    } 
    sideNumber = Math.abs(sideNumber); // Make sides input positive
    sideNumber = Math.round(sideNumber); // Round sides input to nearest int
    return sideNumber;
}

function polygonName(sides) // Finds name based on user input
{
    var polygonName;
    switch (sides) // Swtich for all side options from 0 to 10
    {
        case 0:
            polygonName = "No such thing";
            break;
        case 1:
            polygonName = "Henagon";
            break;
        case 2:
            polygonName = "Digon";
            break;
        case 3:
            polygonName = "Trigon";
            break;
        case 4:
            polygonName = "Tetragon";
            break;
        case 5:
            polygonName = "Pentagon";
            break;
        case 6:
            polygonName = "Hexagon";
            break;
        case 7:
            polygonName = "Heptagon";
            break;
        case 8:
            polygonName = "Octagon";
            break;
        case 9:
            polygonName = "Nonagon";
            break;
        case 10:
            polygonName = "Decagon";
            break;
        default:
            alert("The Charcoal Komodo Dragon Cannot use that number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!");
            getNumSides();
    }
    return polygonName;
}

getNumSides(); // Call function

/**
 * The work submitted here is my work - I have not copied and pasted code into these pages.
 * I have gotten help from these people: Worked with Blake to get defualt case working, got help with using functions from the professor 
 * And these sites: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
 * Connor P. Kells
 * February 17, 2022 at ???? 
 */