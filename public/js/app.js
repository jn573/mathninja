// !BUGS
// #1 minus always returns answer is wrong

/* libraries that i want to use
animations: https://animejs.com/
timezones: https://momentjs.com/
*/

// application controls

(function init() {
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
})();

const setClass = "box has-background-info";
const unsetClass = "box";
let operator = "plus";
let operation = 'add';
let answered = 0;

const sumObject = {
    num1: 0,
    num2: 0,
    sum: 0,
    answer: 0,
    result: 'Correct',
    operation: 'add',
    operator: '+'
}

const imgs = {
    plus: "img/plus.png",
    minus: "img/minus.png",
    multiply: "img/multiply.png",
    divide: "img/divide.png"
}

const updateStatusCount = () => answered++;

// const updateStatus = function () {
//     const status = document.getElementById("answered");
//     status.textContent = answered;
//     updateStatusCount();
// }

// updateStatus();


function setUnsetOperator(e) {
    const unset = document.getElementById(operator);
    if (unset.id !== null) unset.className = unsetClass;
    operator = e.id;
    //should probably clean this up
    sumObject.operation = operations[e.id];
    sumObject.operator = operators[sumObject.operation];
    e.className = setClass;
    initIntObj(sumObject);
}

const operators = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/"
}

const operations = {
    plus: 'add',
    minus: 'subtract',
    multiply: 'multiply',
    divide: 'divide'
}

function getOperator(op) {
    return operators[op];
}

function initIntObj() {
    //todo add code here to update the front end
    sumObject.num1 = getRandomInt();
    sumObject.num2 = getRandomInt();
    // sumObject.operation = operation;
    // sumObject.operator = getOperator(operation);
    // logic to deal with order of numbers for minus - no negative numbers
    //  (until there is more logic to deal with different levels of calculations)
    if (sumObject.operation === "subtract") {
        if (sumObject.num1 < sumObject.num2) {
            let nm1 = sumObject.num1;
            sumObject.num1 = sumObject.num2;
            sumObject.num2 = nm1;
        }
        sumObject.sum = getObjSum(sumObject);
    }
    // to make the divide clean for now, also to fix divide by zero
    else if (sumObject.operation === "divide") {
        if (sumObject.num2 === 0) {
            let nm1 = sumObject.num2;
            sumObject.num2 = nm1;
        } else {
            sumObject.num1 = getRandomInt(10, 'ceil') * sumObject.num2;
        }
        sumObject.sum = getObjSum(sumObject);
    } else {
        sumObject.sum = getObjSum(sumObject);
    }
    updateField('num1', sumObject.num1);
    updateField('num2', sumObject.num2);
    updateField('answer', '');
    // if (obj.sum === obj.answer) { obj.result = 'correct'; } else { obj.result = 'incorrect'; }
}

function updateField(elem, val) {
    let node = document.getElementById(elem);
    if (node.nodeName === 'INPUT') { //INPUT
        node.value = val;
    } else if (node.nodeName === "P" || node.nodeName === "DIV") {
        node.textContent = val;
    }
    console.log(`%c node type ${node.nodeName}`, 'color: green');

}

function getElemValueById(elemId) {
    return document.getElementById(elemId).value;
}

function checkAnswer() {
    sumObject.answer = parseInt(getElemValueById('answer'));
    if (sumObject.answer === sumObject.sum) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        const msg = `${sumObject.num1} ${sumObject.operator} ${sumObject.num2} = ${sumObject.answer}`;
        updateField('history', msg);
        initIntObj();
    } else {
        document.getElementById("correct").style.display = "none";
        document.getElementById("incorrect").style.display = "block";
        const msg = `${sumObject.num1} ${sumObject.operator} ${sumObject.num2} = ${sumObject.answer}`;
        updateField('history', msg);
    }
}

