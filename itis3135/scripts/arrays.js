// Loads functions for each button and loads ability to start user on employee selection
window.onload = function () {
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee").focus();
};

var employee = [];
var salary = [];

function addSalary() {   

    // Get inputted employyee and their salary
    var enteredSalary = document.getElementById("employee").value;
    var enteredName = document.getElementById("salary").value;

    // Check to make sure inputted salary is valid. Must be a number and must not be left empty
    if (NaN(enteredSalary) || enteredSalary == "") {
        alert("Please enter a valid salary");
        enteredSalary = ""; // Clears invalid input
        $("employee").focus(); // Starts user on employee selection when pages loads
    }
    else {
        // If valid salary input, add salary and employye to arrays
        enteredSalary = parseFloat(enteredSalary);
        employee.push(enteredName);
        salary.push(enteredSalary);
        // Clears enterybox so new salary can be entered after adding previously enter salary to array
        // and redirects user to employee selection so a new employee and salary can be added
        $("salary").innerHTML = "" ;
        $("names").focus();
    }

}

function displayResults() {

    // Used to find average
    var average = 0;
    var sum = 0;
    // Used to find highest salary
    var nameWithHighestNum;
    var maxNum;

    // Loop through array of salaries to add all the salaries and 
    // then divide by the number of saleries to find average salary
    for (i = 0; i <= salary.length; i++) {
        sum += salary[i];
    }
    average = (sum / salary.length);
    alert("Average Salary: $" + average);
}

function displaySalary() {



}