const setClass = "box notification is-info";
const unsetClass = "box";

function setOperation(e) {
    unsetOperation();
    e.className = setClass;
    // unset = document.getElementsByClassName('box notification is-info');
    // setBackground(unset, 'unset');
    // setBackground(e, 'set');
}

function unsetOperation() {
    const x = document.getElementsByClassName(setClass);
    for (var i =0; i < x.length;i++) {
        if (x[i].className===setClass) {
            x[i].className=unsetClass;
        }
    }
}

