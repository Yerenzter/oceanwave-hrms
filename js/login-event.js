let clear_btn1 = document.querySelector("#clear-btn1");
let clear_btn2 = document.querySelector("#clear-btn2");

let password =  document.querySelector("#password");
let username = document.querySelector("#username");

let lock = document.querySelector("#lock");
let person = document.querySelector("#person");

function ShowClear() {
	clear_btn1.style.visibility = 0 < username.value.length ? "visible" : "hidden";
	clear_btn2.style.visibility = 0 < password.value.length ? "visible" : "hidden";
	
	lock.style.color = 0 < password.value.length ? "#0155b8" : "#333";
	person.style.color = 0 < username.value.length ? "#0155b8" : "#333";
}

function OnClear(args) {
	args == 0 ? username.value = "" : password.value = "";
	args == 0 ? clear_btn1.style.visibility = "hidden" : clear_btn2.style.visibility = "hidden";
	args == 0 ? person.style.color = "#333" : lock.style.color = "#333";
}
