// Declaring a function
// A set of instruction, that can be regrouped for reusability;
function sayHello(){
  console.log("Hello");
}

// Calling / Invoking the function
sayHello();

//2) Function with parameter
function goodBye(name){
  console.log("Hello "+name);
}
goodBye("Amin");
goodBye("Aman");
goodBye("John");

//3) Function with result (calculation, comparison, transfor ...)
function sum(a,b){
  return a+b;
}

console.log(sum(3,2));
console.log(sum(123,59));

// Create a function that will return the average of three numbers
function calculateAverage(a,b,c){
  return (a+b+c)/ 3
}
console.log(calculateAverage(5,8,2));

function dimAndVol(a,b,c){
  return [a*b, a*b*c];
}
console.log(dimAndVol(2,3,4));


function minMaxAvg(a,b,c){
  // 1) Create a variable, that is called min, max, avg
  var min;
  var max;
  var avg = (a+b+c)/3;
  // 2)Perform the operation
  if (a > b){
    if (a> c){
      max = a; 
    }
    else {
      max = c;
     }  
  }
  else {
    if (b > c){
      max = b;
    }
    else {
      max = c;
    }
  }
  return [min,max,avg]
// Retrun at the end
}
console.log(minMaxAvg(5,12,9))
