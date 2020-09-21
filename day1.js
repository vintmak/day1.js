// I create a variable, the variable is called a and the value is 10
var a = 10;
var b = 3;

// I create a variable, the variable is called a and the value ...
var sum = a + b;
//Show the value inside console..
console.log(sum);

// I'm creating a variable as a String (Sentence, word, characters)
var name = "Muzzafar";
console.log(name)
var lastName = "Hashim"
var fullName = name + " "+ lastName
console.log(fullName)
// What is the " " ?

// Mathematical Operation

var minus = a - b;
var product = a * b;
var division = a / b;
var modulo = a % b;
console.log(minus);
console.log(product);
console.log(division);
// Remainder of division operation(10 / 3) = 3
console.log(modulo);

var hungry = true;
console.log(hungry);

// In Either this or that
// Either hungry or not hungry
if(hungry == true){
  console.log("Let's have dinner");
}
else {
  console.log("Let's wait another 15 minutes");
}

var age = 18;

if (age < 13){
  console.log("You may not watch the film");
} else{
  console.log("You can watch the film");
}

var number = 22;
// A number is odd if the remainder of division by 2 is 1 (modulo)

if (number % 2 == 1) {
  console.log(number +" is an odd number");
}
else {
  console.log(number +"is an even number");
}

var personAge = 40;
var price = 100;

if (personAge < 19){
  console.log("Ticket price is "+price*0.5)
}
else if (personAge < 41){
  console.log("Ticket price is "+price);
}
else if (personAge < 66){
  console.log("Ticket price is "+price * 0.75);
}
else {
  console.log("Ticket price is "+price * 0.5);
}

for (var i = 0; i < 10; i++){
  console.log(i);
}

for (var i = 10; i > 0; i--){
  console.log(i);
}

for (var i = 1; i < 10; i+=2){
  console.log(i)
}

var multiplier = 3;
var lines = 15;
/*
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
*/

for (var i = 1; i < lines+1; i ++){
  console.log(i + "x " +multiplier+ " = " + i *multiplier);
}
