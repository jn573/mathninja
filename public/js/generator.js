let answered = 0;
// let operation = 'add';

const getRandomInt = function randomInt(limit = 10) {
    return Math.floor(Math.random() * limit);
}

const updateStatusCount = () => answered++;

const updateStatus = function () {
    const status = document.getElementById("answered");
    status.textContent = answered;
    updateStatusCount();
}

updateStatus();

function setOperator(e) {
    let op = document.getElementById("currentoperation");
    if (e.textContent==='Plus') {
        operation = 'add';
        op.textContent = operation;
    } else if (e.textContent==='Multiply') {
        operation = 'multiply';
        op.textContent = operation;
    }
}

// document.getElementById("add").addEventListener("click", setOperator(this));
// document.getElementById("multiply").addEventListener("click", setOperator(this));

const checkAnswerAdd = (...args) => args.reduce((val, total) => val + total, 0);
const checkAnswerMultiply = (...args) => args.reduce((val, total) => val * total, 0);

function checkResult(sumOjb) {
    let answer = document.getElementById("answer");
    let isCorrect = false;
    // todo logic to check the result should probably be built into the sum object and changed on the object state
    if (operation === 'add') {
        if (checkAnswerAdd(sumObj[0], sumObj[1]) === sumObj[2]) {
            // todo add logic here to update the page 
        }
        else if (operation === 'multiply') {
            if (checkAnswerMultiply(sumObj[0], sumObj) === sumObj[2]) {
                // todo add logic here to hand the result of the check
            }
        }

    }
}

const generateSum = function () {
    let sum1 = getRandomInt();
    let sum2 = getRandomInt();
    let answer = getResult(sum1, sum2);
    return {
        x: sum1,
        y: sum2,
        z: answer
    }
}

function updateSumElements(...vals) {
    let x = document.getElementById("x");
    let y = document.getElementById("y");
    // let result = document.getElementById("result");
    x.textContent = vals["x"];
    y.textContent = vals["y"];
}

function setSum() {
    const sum = generateSum;

}

//joining objects
stats = {
    strength: 60,
    class: 'palladin'
}

character = {
    name: 'Eros',
    skin: 'Shimmer'
}

let myCharacter = { ...stats, ...character };

console.log(myCharacter['name']);

function printCharacter() {
     let obj = document.getElementById("anObject");
     let vals = Object.values(myCharacter);
     for (let i = 0; i < vals.length; i++) {
         console.log(vals[i]);
     }
 }

console.log('printing character');
printCharacter();