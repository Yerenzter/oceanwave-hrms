function LoginLoading() {
	loginHeader.style.width = "100%";
	loginHeader.style.transition = "width 0.5s";
	
	loginForm.style.width = "0%";
	loginForm.style.display = "none";
	loginForm.style.transition = "width 0.5s";
	
	loginHeaderLabel.textContent = "Here we come!";
	
	loginBtn.style.backgroundColor = "#00000000";
	loginBtn.style.color = "#333";
	loginBtn.style.transition = "background-color 0.2s";
}
