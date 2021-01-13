let level = 'easy';

const difficulty = {
    easy: 5,
}

const getLimit = function (lvl) {
    let levels = { easy: 5, intermediate: 8, hard: 12, insane: 15 };
    return levels.filter[lvl];
}

const getRandomInt = function randomInt(limit = 10,mode = 'floor') {
    if (mode==='floor') {
        return Math.floor(Math.random() * limit);
    } else {
        return Math.ceil(Math.random() * limit);
    }
}

// function setIntObj(obj,op) {
//     //todo add code here to update the front end
//     obj.num1 = getRandomInt();
//     obj.num2 = getRandomInt();
//     obj.sum = updateObjSum(obj.op);
//     // if (obj.sum === obj.answer) { obj.result = 'correct'; } else { obj.result = 'incorrect'; }
// }

function getObjSum(obj) {
    switch (obj.operation) {
        case 'add':
            return getAddInt(obj.num1, obj.num2);
            break;
        case 'subtract':
            return getSubtractInt(obj.num1, obj.num2);
            break;
        case 'multiply':
            return getMultiplyInt(obj.num1, obj.num2);
            break;
        case 'divide':
            return getDivideInt(obj.num1, obj.num2);
            break;
    }
}

const getAddInt = (...args) => args.reduce((val, total) => val + total, 0);
const getMultiplyInt = (...args) => args.reduce((val, total) => val * total, 1);
const getSubtractInt = (...args) => args.reduce((val, total) => val - total, 0);
const getDivideInt =  (n1,n2) => n1/n2;  // (...args) => args.reduce((val, total) => val / total, 1);