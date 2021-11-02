const input = document.querySelectorAll(".input")
const firstBtn = document.querySelector("#first-btn")
const secondBtn = document.querySelector("#second-btn")

function fetchApi(){
    fetch(url). then(response => response.json)
    
}

firstBtn.addEventListener("click", fetchApi)