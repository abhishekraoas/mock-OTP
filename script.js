const name = document.querySelector("#name");
const validate = document.querySelector("#validate")
const otpBtn = document.querySelector("#otpBtn")
const validateBtn = document.querySelector("#validateBtn")
const outputDiv = document.querySelector("#output")

var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";
var text = name.value;
const serverURL = url + text;

function fetchApi(){
    fetch(serverURL).then(response => console.log(response))
}

otpBtn.addEventListener("click", fetchApi)