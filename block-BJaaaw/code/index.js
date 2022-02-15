// if..else
/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt ("Enter a number"));
if (num %2 === 0) 
  {alert("number is even"); }
  else
  {alert("number is odd")}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = prompt ("Enter a number");
let num2 = prompt ("Enter a number");
if (num1 > num2){
  alert(`${num1} is greater`)
} else {
  alert(`${num2} is greater`)
}
// 3. Convert the above code using`?` terniary operator
 num1 > num2 ?
 alert(`${num1} is greater`) 
 :
 alert(`${num2} is greater`)
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house = prompt ("Enter the name of your House ?");

if (house === "stark") 
{
  alert(" Winter is coming");
}
  else if  (house === "lenister")
  {
    alert(" A lannister always pays his debt");
  }
  else {
    alert(" All men must die");
  }


// 5. Convert the above code using`?` terniary operator
house = "stark" ? alert("Winter is coming") : house === "lenister" ? alert("A lannister always pays his debt") : alert(" All men must die");

// Switch
switch (house) {
  case "stark":
    alert("Winter is coming");
  
  case "lannister":
      alert("A lannister always pays his debt");  
   
  case "All" :
    alert("All men must die");   

}
// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = prompt("Enter the name of the month");

switch (month) {
  case "January" :
    alert("31");
    break;
  case "February" :
    alert("28/29");
    break;
  case "March" :
    alert("31");
    break;  
  case "April" :
    alert("30"); 
      
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let Salary = prompt("Enter the amount of your salary");
switch (Salary) {
  case "20000" :
    alert(Salary - 2000);

  case "40000" :
    alert(Salary - 8000);

  case "50000" :
    alert(Salary - 15000);
}
let salary = prompt("Enter your salary?");

switch(true) {
  case salary <= 20000:
    let tax = (salary * 10) /100;
    alert(`Your in hand amount ${salary - tax}`);
    break;
  case salary <= 40000:
    let tax = (salary * 20) /100;
    alert(`Your in hand amount ${salary - tax}`);
    break;
  case salary <= 60000:
    let tax = (salary * 30) /100;
    alert(`Your in hand amount ${salary - tax}`);
    default:
      alert("Not a valid input")
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt("Enter Your Marks");
if  (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks  > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B")
} else if (marks > 30 && marks < 50){
  alert("Grade C")
} else if (marks > 0) {
  alert("Grade D")
}

switch(true){
  case marks > 100 :
    alert("Marks can't be greater than 100");
    break;
    case marks  > 80 && marks < 100 :
    alert("Grade A");
    break;
    case marks > 50 && marks < 80 :
    alert("Grade B");
    break;
    case (marks > 30 && marks < 50) :
    alert("Grade ");
    break;
    default:
      alert("Not a valid input")
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");
if ("weather = sunny") {
  alert("Wear a T-shirt");
} else if ("weather = rainy") {
  alert("Don't forget to take your raincoat");
} else if ("weather = hot") {
  alert("Get a hanky");
} else if ("weather = else"){
  alert("Not a valid input")
}
switch (weather){
  case "sunny":
    alert(`Wear a T-Shirt`);
    break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
    case "hot":
    alert(`Get a hanky`);
    break;
    case "freezing":
    alert(`Get your sweeter on`);
    break;
    default:
      alert(`Not a valid input`)

}