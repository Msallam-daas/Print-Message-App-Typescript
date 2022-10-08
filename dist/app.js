"use strict";
let inputEle = document.getElementById("input");
let buttonEle = document.getElementById("btn");
let msgEl = document.getElementById("msg");
const printValue = () => {
    let inputValue = inputEle.value;
    if (inputValue != "") {
        msgEl.innerHTML = inputValue;
        inputEle.value = "";
    }
};
buttonEle.addEventListener("click", printValue);
