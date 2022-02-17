function getShape(sides) 
{
    switch (sides) 
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