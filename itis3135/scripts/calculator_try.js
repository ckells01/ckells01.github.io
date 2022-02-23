/**Functions to do math with alerts/prompts*/
function add ()
{
    var num1 = prompt("Enter the first number to add"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to add"); 
    num2 = parseFloat(num2); 
    var result = num1 + num2; 
    alert(num1 + " + " + num2 + " = " + result); 
}

function sub ()
{
    var num1 = prompt("Enter the first number to subtract"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to subtract"); 
    num2 = parseFloat(num2); 
    var result = num1 - num2; 
    alert(num1 + " - " + num2 + " = " + result);
}

function mul ()
{
    var num1 = prompt("Enter the first number to multiply"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to multiply"); 
    num2 = parseFloat(num2); 
    var result = num1 + num2; 
    alert(num1 + " * " + num2 + " = " + result);
}

function div ()
{
    var num1 = prompt("Enter the first number to divide"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to divide"); 
    num2 = parseFloat(num2); 
    var result = num1 + num2; 
    alert(num1 + " / " + num2 + " = " + result);
}