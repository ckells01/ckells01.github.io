// Loads functions for each button and starts user on employee selection
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
    var enteredSalary = parseFloat(document.getElementById("salary").value);
    var enteredName = document.getElementById("employee").value;

    // Check to make sure inputted salary is valid. Must be a number and must not be left empty
    if (enteredSalary === "") 
    {
        alert("Please enter a valid salary");
        enteredSalary = ""; // Clears invalid input
        document.getElementById("employee").focus(); // Starts user on employee selection
    }
    else 
    {
        // If valid salary input, add salary and employee to arrays
        enteredSalary = parseFloat(enteredSalary);
        employee.push(enteredName);
        salary.push(enteredSalary);
        // Clears enterybox so new salary can be entered after adding previously enter salary to array
        // and redirects user to employee selection so a new employee and salary can be added
        document.getElementById("salary").value = "";
        document.getElementById("employee").focus();
    }

}

function displayResults() {

    // Used to find average
    var average = 0;
    var sum = 0;
    // Used to find highest salary
    var employeeWithHighestNum = "";
    var maxNum = 0;

    // Loop through array of salaries to add all the salaries and 
    // then divide by the number of saleries to find average salary
    for (i = 0; i < salary.length; i++) {
        sum += salary[i];
    }
    average = (sum / salary.length);

    // Loop through array of salaries to find highest salary
    for (i = 0; i < salary.length; i++) {
        // If entered salary is > than the current max number, make that salary the new max number
        if (salary[i] > maxNum) {
            maxNum = salary[i]; // Set max number to new highest salary
            employeeWithHighestNum = employee[i]; // Set the employee with highest salary variable to the new employee with the higest salary
        }
    }

    // Prints results onto webpage
    document.getElementById("results").innerHTML = "The average salary is $" + average.toFixed(2) + " and the highest salary is " + employeeWithHighestNum + "'s, at $" + maxNum.toFixed(2);

}

function displaySalary() {

    // Create table
    var table;
    table = "<table><tr><th>Employee</th><th>Salary</th></tr>"
    // Loop to add table rows for each employee
    for (i = 0; i < salary.length; i++){
        table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    table += "</table>"; // End table
    // Prints results onto webpage
    document.getElementById("results_table").innerHTML = table;
    
}