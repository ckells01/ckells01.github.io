var numSides = getNumSides();

if (entryValidation(numSides)) 
{
    alert(getShape(numSides));
}
else 
{
    numSides = getError();
}

function getNumSides() // Take input number from user for number of sides on a polygon
{
    var sideNumber = parseInt(prompt("The Charcoal Komodo Dragon wants your number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    return sideNumber;
    // Takes user input and saves it as an int, then returns it
}

function numError() // Take input number from user for number of sides on a polygon after giving errormessage
{
    var sideNumber = parseInt(prompt("The Charcoal Komodo Dragon Cannot use that number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    return sideNumber;
    // Gives error message when invalid value is entered. Then takes user input and saves it as an int, then returns it
}

function getShape(sides) // Calculates the polygon based on the users input
{
    sides = Math.abs(sides); // Make sides input positive
    sides = Math.round(sides); // Round sides input to nearest int

    switch (sides) // Swtich for all side options from 0 to 10
    {
        case 0:
            return "A 0 sided polygon does not exsist.";
            break;
        case 1:
            return "A 1 sided polygon is called a Henagon";
            break;
        case 2:
            return "A 2 sided polygon is called a Digon";
            break;
        case 3:
            return "A 3 sided polygon is called a Trigon";
            break;
        case 4:
            return "A 4 sided polygon is called a Tetragon";
            break;
        case 5:
            return "A 5 sided polygon is called a Pentagon";
            break;
        case 6:
            return "A 6 sided polygon is called a Hexagon";
            break;
        case 7:
            return "A 7 sided polygon is called a Heptagon";
            break;
        case 8:
            return "An 8 sided polygon is called a Octagon";
            break;
        case 9:
            return "A 9 sided polygon is called a Nonagon";
            break;
        case 10:
            return "A 10 sided polygon is called a Decagon";
            break;
    }
}

function entryValidation(sides)
{
    if (sides <= 10 && sides >= -10 ) // Ckeck to make sure entered number is between 10 and -10
    {
        return (sides);
    }
}

/**
 * The work submitted here is my work - I have not copied and pasted code into these pages.
 * I have gotten help from these people: ?????
 * And these sites: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
 * Connor P. Kells
 * February ??, 2022 at ???? 
 */