var numSides = getNumSides();

function getNumSides() // Take input number from user for number of sides on a polygon
{
    var sideNumber = parseInt(prompt("The Charcoal Komodo Dragon wants your number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    // Takes user input and saves it as an int, then returns it

    while (isNaN(sideNumber)) 
    {
        sideNumber = parseInt(prompt("That is not a number! Please enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!"));
    }

    sideNumber = Math.abs(sideNumber); // Make sides input positive
    sideNumber = Math.round(sideNumber); // Round sides input to nearest int

    switch (sideNumber) // Swtich for all side options from 0 to 10
    {
        case 0:
            alert("A 0 sided polygon does not exsist.");
            break;
        case 1:
            alert("A 1 sided polygon is called a Henagon");
            break;
        case 2:
            alert("A 2 sided polygon is called a Digon");
            break;
        case 3:
            alert("A 3 sided polygon is called a Trigon");
            break;
        case 4:
            alert("A 4 sided polygon is called a Tetragon");
            break;
        case 5:
            alert("A 5 sided polygon is called a Pentagon");
            break;
        case 6:
            alert("A 6 sided polygon is called a Hexagon");
            break;
        case 7:
            alert("A 7 sided polygon is called a Heptagon");
            break;
        case 8:
            alert("An 8 sided polygon is called a Octagon");
            break;
        case 9:
            alert("A 9 sided polygon is called a Nonagon");
            break;
        case 10:
            alert("A 10 sided polygon is called a Decagon");
            break;
        default:
            alert("The Charcoal Komodo Dragon Cannot use that number! Enter a number from 0 to 10 and the dragon will tell you what a polygon with that many sides is called!");
            getNumSides();
            // Gives error message when invalid value is entered. Then runs functon again to takes new user input and saves it as an int
    }
}

/**
 * The work submitted here is my work - I have not copied and pasted code into these pages.
 * I have gotten help from these people: Blake - He helped me get my function to call again in the default case in my switch statement when mine had errors after his code was used as an exaple during class
 * And these sites: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
 * Connor P. Kells
 * February 17, 2022 at ???? 
 */