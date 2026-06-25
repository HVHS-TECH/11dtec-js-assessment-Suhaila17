console.log("Hello world!")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const ITEM_FIELD = document.getElementById("itemField");
const MONEY_FIELD = document.getElementById("moneyField");

function Order(){
function getFormInput(){
    let userName = (NAME_FIELD.value);
    OUTPUT.innerHTML = "<p> Your name is " + userName + "</p>";
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userProduct = (ITEM_FIELD.value);
    OUTPUT.innerHTML += "<p> Your item is " + userProduct + "</p>" ;
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p> You have $" + userMoney + "</p>"; 
}
}