let answered = 0;

const getRandomInt = function randomInt(limit = 10) {
    return Math.floor(Math.random() * limit);
}

const getResult = (...args) => args.reduce((val,total) => val+total,0);

const updateStatusCount = () => answered++;

const updateStatus = function() {
    const status = document.getElementById("answered");
    status.textContent = answered;
    updateStatusCount();
}

updateStatus();

function checkAnswer() {
    // todo some stuff here
}

function generateSum(){
    let sum1 = getRandomInt();
    let sum2 = getRandomInt();
    let answer = getResult(sum1,sum2);
    return {
        x: sum1,
        y: sum2,
        z: answer
    }
}