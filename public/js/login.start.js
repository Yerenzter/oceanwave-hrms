let login = document.querySelector("#login");
let loginHeader = document.querySelector("#login-header");
let loginHeaderLabel = document.querySelector("#login-header-label");
let loginForm = document.querySelector("#login-input");

function InitializeLogin() {
	OnStart();
	OnSlideLogin();
}

function OnSlideLogin() {
	login.style.opacity = 1;
	login.style.transition = "opacity 1s";
	
	loginHeader.style.marginRight = "0em";
	loginHeader.style.transition = "margin-right 0.5s"
	
	loginHeaderLabel.style.opacity = 1;
	loginHeaderLabel.style.transition = "opacity 0.5s";
	loginHeaderLabel.style.transitionDelay =  "0.5s";
}
