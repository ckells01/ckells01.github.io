var name = [];
var salary = [];

function addSalary() {

    var enteredSalary;
    var enteredName;

    if (NaN(enteredSalary) || enteredSalary == "") {
        alert("Please enter a valid salary");
        enteredSalary = "";
    }
    else {
        enteredSalary = parseFloat(enteredSalary);
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