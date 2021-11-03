const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2")
const firstBtn = document.querySelector("#first-btn")
const secondBtn = document.querySelector("#second-btn")
const outputDiv = document.querySelector("#output")
var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";
var text = input1.value;
const serverURL = url + text;
function fetchApi(){
    fetch(serverURL).then(response => response.json()).then(json => outputDiv.innerText = json.otp)
    console.log("hello")
}

firstBtn.addEventListener("click", fetchApi)