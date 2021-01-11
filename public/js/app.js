const setClass = "box notification is-info";
const unsetClass = "box";
let operator = "plus";

// a better way of setting unsetting is to unset previous and set new,
// i.e. either keep history of current or by id
function setUnsetOperator(e) {
    const unset = document.getElementById(operator);
    unset.className = unsetClass;
    operator = e.id;
    e.className = setClass;
}

const operators = {
    plus: "+",
    minus: "-",
    multiply: "*",
    divide: "/"
}

function getOperator(op) {
    return operators[op];
}

function returnFunction(f) {
    // function(`${a} ${operator} ${b}`
    const fnct = '"use strict;" return (' + f + ')';
    return fnct;
}

function writeSum(x, y, e) {
    operator = getOperator(e);
    // let createSum = `${x} ${operator} ${y}`;
    // e.textContent = sumCheck(x, y);
    const fn = returnFunction(`a ${operator} b`);
    const val = fn(x, y);
    console.log(x);
}