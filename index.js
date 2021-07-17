// Creating Variables

// define a variable 'fahrenheit' using 'var' and set it to 90
    console.log("hoisted?", fahrenheit); // returns undefined
    var fahrenheit = 90;
    console.log("after initialization", fahrenheit); // returns 90

// define 'fahrenheit' again using 'var' and set it to 100
    var fahrenheit = 100;
    console.log("redeclared", fahrenheit);

// define a variable 'fahrenheit' using 'let' and set it to 90
    console.log("hoisted?", fahrenheit); 
    let fahrenheit = 90;
    console.log("after initialization", fahrenheit); 

// define 'fahrenheit' again using 'let' and set it to 100, can we?
    let fahrenheit = 100;
    console.log("redeclared", fahrenheit);

// define a variable 'fahrenheit' using 'const' and set it to 90
    const fahrenheit = 90

// define 'fahrenheit' again using 'const' and set it to 100, what happens?
    const fahrenheit = 100

// Variable Scopes

// Global Scope

let globalVariable = "I am in the global scope";

// Function Scope

function whatsTheScope() {
  let functionVariable = "I am inside of a function";
}

// // Block Scope

function whatsTheScope() {
  if (true) {
    let blockVariable = "I am inside of a block";
  }
}

// // Defining functions

// // Executing functions

// // Call Stack and Job Queue


