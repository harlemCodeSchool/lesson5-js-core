window.onload = function() {
var wrapper = document.getElementById('wrap');

function post (x) {
  var a = document.createElement('div');
  a.innerHTML = x;

  wrap.appendChild(a);
}

// Main parts of JS
// comment
/* 
 Multi- Line Comment
 */

// make alert box pop up
alert('this gets alerted!');

post('Welcome to the basics of javascript lesson. Follow these comments along with their place in the js.js file.'); 

post('This is how we write things to the inspection console: ');

post("<code>// write things to the console <br>console.log('this gets printed in the console');</code>");

// write things to the console
console.log('this gets printed in the console');


post("<br>Declare Variables: <br><code>// declare variable<br> var a;<br>// set variable<br>var a = 1;<br>// a now equals 1<br>var b = 9;</code><br>");
// declare variable
var a;

// set variable
var a = 1;
// a now equals 1
var b = 9;



// math productions are easy
var product = a * b;


// you can add different things to be printed
alert('the result of a times b is: ' + product);

// make an array
var shoes = [];

// arrays are indexed (starting at 0)
// add things to end of an array with the push() method

shoes.push("nikes")

// access the arrays elements like this: shoes[index number]
// shoes[0] will now equal "nikes"

// test it
console.log("shoes[0]: " + shoes[0]);


var reeboks = "reeboks";
shoes.push(reeboks);

shoes.push("sandals");
shoes.push("jordans");

// let's loop through the array now!

// for loop
// the length() method returns the number of elements in an array
for (i=0; i < shoes.length; i++){
  console.log('here comes our for loop');
  console.log(shoes[i]);
}

// we don't have to declare the i variable, it comes with the 'for loop'


// same thing with a while loop
var i = 0;
  while(i < shoes.length){
    console.log('now the same thing with a whie loop!');
    console.log(shoes[i]);
    i++;
  }
}