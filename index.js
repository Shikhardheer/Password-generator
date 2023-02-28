const inputSlider=document.querySelector('[data-lengthSlider]');
const lengthDisplay=document.querySelector('[data-lengthNumber]');
const uppercase=document.querySelector("#uppercase");
const lowercase=document.querySelector("#lowercase");
const number=document.querySelector("#number");
const symbols=document.querySelector("#symbols");

let password="";
let passwordlength=10;
let checkCount=1;
handleSlider();

function handleSlider(){
    inputSlider.value=passwordlength;
    lengthDisplay.innerText=passwordlength
}
function setIndicator(){
    Indicator.style.backgroundColor=color;
}
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
function generateRandomNumber(){
    return getRndInteger(0,9);
}
function getUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}
function getLowerCase(){
    return String.fromCharCode(getRndInteger(97,122));
}
function generateSymbols(){
    // return String.
}
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";
    }
    catch{
        copyMsg.innerText="Failed";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);

   
}
inputSlider.addEventListener('input',(e)=>{
    passwordlength=e.target.value;
    handleSlider();
})