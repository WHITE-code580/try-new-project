"Exchange Currency App".

A simple currency exchange web application built with HTML, CSS, and JavaScript.
This project allows users to enter an amount in Euros and instantly convert it to US Dollars.

Features:
Convert Euros (€) to Dollars ($)
Simple and responsive user interface
Styled with CSS
Uses JavaScript functions for conversion logic
Prevents page reload using event.preventDefault()

Technologies Used:
1. HTML5
2. CSS3
3. JavaScript

Project Structure:
project-folder/
│
├── index.html
├── style.css
├── script.js
└── Images/
    └── exchange currency1.png
    
How It Works:
1. The user enters an amount in Euros.
2. When the button is clicked:
a. JavaScript captures the form submission

Exchange Rate:
The current conversion used in this project is: 1 Euro = 1.16 Dollars.

JavaScript Functions:
showResult(event)
a. Prevents the form from refreshing
b. Gets the Euro amount from the input
c. Calls the conversion function
d. Displays the result on screen

exchangeEurosToDollars(euros)
a. Converts Euros into Dollars
b. Returns the converted value



