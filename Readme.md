# JavaScript Functions and Variables

## Goals:
- Understanding variables:
    - What are variables?
    - How to define variables
    - When to use var, let, and const
    - How to identify the scope of a variable
- Functions dive deep: 
    - What are functions?
    - Different ways to define a function
    - Function reference vs execution
    - What are high order functions?
    - "First class citizens"
    - Parameters vs arguments
- Call stack and job queue:
    - What is a call stack/job queue?
    - importance in javascript*
- Debugging:
    - How to read errors 
    - How to use debugger
    - How to use console.log


## Variables
- Allows us to store and label values
- Can exist in 3 different scopes: 
    - global scope:
        - Anything defined outside of a function
    - function scope
        - Variable declared inside of a function
    - block scope was introduced in ES6
        - Variable defined inside of a block
        - A block is anything with opening and closing curly braces ``` if () {} ```
- Three ways to define variables: `var`, `let` and `const`
- `var`: 
    - Can optionally initialize with a value
    - Side effects: not block scoped, can be redeclared, hoisting
    - Not used in modern scripts
    - [MDN Var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
    - [The Old Var](https://javascript.info/var)
- `let`:
    - Can optionally initialize with a value
    - Block scoped
    - Can not be redeclared
    - Used now in place of var
- `const`:
    - Must be initialized with a value
    - Block scoped
    - Can not be redeclared

## Functions
- The building blocks of JavaScript applications
- Functions are objects
- Allow us to organize behaviors into reusable pieces

#### Ways to define a function: 

```
Function declaration: we use the keyword `function`:

    function helloWorld() {
        // logic
    }
```

```
Function expression: stored inside a variable:

    const helloWorld = function() {
        // logic
    }
```
- 




