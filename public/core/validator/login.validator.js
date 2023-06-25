let loginValidatorLabel = document.querySelector("#login-validator-label");
let user = document.querySelector("#username");
let passcode = document.querySelector("#password");
let loginBtn = document.querySelector("#login-btn");

let init = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"	
	},
	mode: "cors",
	cache: "default"
};

let json = new Request("/data/admin/admin.json", init);

loginBtn.onclick = () => {
	fetch(json).then((resp) => {
		return resp.json();	
	}).then((admin) => {
		
		if(user.value == admin.username && passcode.value == admin.password) {
			loginValidatorLabel.textContent = "Successfully logged in.";	
		} 
		else {
			if(user.value == "" && passcode.value == "") {
				loginValidatorLabel.textContent = "You must log in first.";	
			}
			else if(user.value == admin.username && passcode.value == "") {
				loginValidatorLabel.textContent = "You forgot to enter the password.";	
			}
			else if(passcode.value == passcode.value && user.value == "") {
				loginValidatorLabel.textContent = "You forgot to enter your username.";	
			}
			else if(user.value == admin.username && passcode.value != admin.password) {
				loginValidatorLabel.textContent = "Wrong password."	
			}
			else if(passcode.value == admin.password && user.value != admin.username) {
				loginValidatorLabel.textContent = "User does not exist.";	
			}
			else if(user.value != admin.username && passcode.value != admin.password) {
				loginValidatorLabel.textContent = "User does not exist.";	
			}
			else if(user.value != admin.password && passcode.value == "") {
				loginValidatorLabel.textContent = "User does not exist.";
			}
			else {
				loginValidatorLabel.textContent = "";	
			}
		}	
	});
}
