getNumSides();

function validateEntry(sideNumber) 
{
    while (isNaN(sideNumber) || sideNumber < -10 || sideNumber> 10)
    {
        sideNumber = parseInt(prompt("That is not a valid number! Please enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    } 
    sideNumber = Math.abs(validSideNum); // Make sides input positive
    sideNumber = Math.round(validSideNum); // Round sides input to nearest int
    return sideNumber;
}

function getNumSides() // Take input number from user for number of sides on a polygon
{
    var sideNumber = parseInt(prompt("The Charcoal Komodo Dragon wants your number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    // Takes user input and saves it as an int, then returns it

    validateEntry(sideNumber);
    polygonName(sideNumber);

}

function polygonName(sides) 
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

/**
 * The work submitted here is my work - I have not copied and pasted code into these pages.
 * And these sites: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
 * Connor P. Kells
 * February 17, 2022 at ???? 
 */