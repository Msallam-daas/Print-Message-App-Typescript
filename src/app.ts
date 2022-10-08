let inputEle=document.getElementById("input")as HTMLInputElement;
let buttonEle=document.getElementById("btn")as HTMLButtonElement;
let msgEl=document.getElementById("msg")as HTMLParagraphElement;

const printValue =() :void=> { 
    let inputValue:any=inputEle.value;
    if(inputValue !=""){ 
        msgEl.innerHTML=inputValue;
        inputEle.value="";
    }
}
buttonEle.addEventListener("click",printValue);