function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

let result;

function calculate(num1, num2, operator){
    if(operator === "add"){
        result = add(num1, num2)
    } else if(operator === "subtract"){
        result = subtract(num1, num2)
    } else if(operator === "multiply"){
        result = multiply(num1, num2)
    } else if(operator === "divide"){
        result = divide(num1, num2)    
    }
    display.textContent = result;
    if(result === 69){
        display.textContent = "nice";
    };

    if(num2 === 0 && operator === "divide"){
        display.textContent = "lol no";
        started = false;
    };

    return result;
}

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multButton = document.querySelector(".multiply");
const divButton = document.querySelector(".divide");
const dot = document.querySelector(".dot");
const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");

//INITIAL CONDITIONS
//started variable tracks whether this is the beginning of a new calculation
let started = false;
let num1 = "";
let num2 = "";
let operator = "";

//resets the numbers and operator and clears the display
clearButton.addEventListener("click", () => {
    started = false;
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "";
})

one.addEventListener("click", () => {
    firstNum("1");
});

two.addEventListener("click", () => {
    firstNum("2");
});

three.addEventListener("click", () => {
    firstNum("3");
});

four.addEventListener("click", () => {
    firstNum("4");
});

five.addEventListener("click", () => {
    firstNum("5");
});

six.addEventListener("click", () => {
    firstNum("6");
});

seven.addEventListener("click", () => {
    firstNum("7");
});

eight.addEventListener("click", () => {
    firstNum("8");
});

nine.addEventListener("click", () => {
    firstNum("9");
});

zero.addEventListener("click", () => {
    firstNum("0");
});

dot.addEventListener("click", () => {
    firstNum(".");
});

plusButton.addEventListener("click", () => {
    //prevents two operators being entered one after another - or from an operator being entered before the first number
    if(operator !== "" || num1 === ""){
        return;
    }
    operation("add");
});

minusButton.addEventListener("click", () => {
    //prevents two operators being entered one after another - or from an operator being entered before the first number
    if(operator !== "" || num1 === ""){
        return;
    }
    operation("subtract");
});

multButton.addEventListener("click", () => {
    //prevents two operators being entered one after another - or from an operator being entered before the first number
    if(operator !== "" || num1 === ""){
        return;
    }
    operation("multiply");
});

divButton.addEventListener("click", () => {
    //prevents two operators being entered one after another - or from an operator being entered before the first number
    if(operator !== "" || num1 === ""){
        return;
    }
    operation("divide");
});

equalsButton.addEventListener("click", () => {
    if(num1 !== "" && num2 !== "" && operator !== ""){
    equals();
    }
});

function firstNum(num){
    if(operator !== ""){
        secondNum(num);
        return;
    };
    //clears the display if this is the start of a new calculation
    if(!started){
        display.textContent = "";
        num1 = "";
    }
    started = true;
    display.textContent += num;
    num1 += num;
};

function operation(symbol){
    //now that the first number is finalized, we can convert it from a string to a number
    num1 = Number(num1);

    if(symbol === "add"){
        display.textContent += "+";
        operator = "add"
        };

    if(symbol === "subtract"){
        display.textContent += "-";
        operator = "subtract"
        };

    if(symbol === "multiply"){
        display.textContent += "×";
        operator = "multiply"
        };

    if(symbol === "divide"){
        display.textContent += "÷";
        operator = "divide"
        };    
};

function secondNum(num){
    display.textContent += num;
    num2 += num;
};

function equals(){
    //now that the second number is finalized, we can convert it from a string to a number
    num2 = Number(num2);
    num1 = calculate(num1, num2, operator);
    num2 = "";
    operator = "";
};

//if number is pressed, populate it on the display
//create the number digit by digit by concatenating a string and then converting to number. Store in num1
//once operator is pressed, populate it on the display
//store the chosen operator in the operator variable
//somehow begin store the second number into num2
//when equals is pressed, call the operate() function


//DIFFERENT STAGES
//pressing the first number calls a function that creates num1 and populates the display
//  will also clear the display left there from the last operation
//pressing the operator puts the operator on display and calls a different function that creates num2
//pressing equals calls the operate() function and sets the num1, num2, and operator variables to null
//  in order to have a clean slate for the next operation