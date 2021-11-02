const input1 = document.querySelector("#input1").value;
const input2 = document.querySelector("#input2")
const firstBtn = document.querySelector("#first-btn")
const secondBtn = document.querySelector("#second-btn")
const outputDiv = document.querySelector("#output")
// var text = input1.value;
// console.log(text)
const url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=" + input1;
function fetchApi(){
    fetch(url).then(response => response.json()).then(json => outputDiv.innerText = json.otp)
    console.log("hello")
}

firstBtn.addEventListener("click", fetchApi)