let welcomeLabel = document.querySelector("#welcome-label");
let startBtn = document.querySelector("#start-btn");

function GetReady() {
	PopupWelcome();
}

function PopupWelcome() {
	welcomeLabel.style.marginTop = "0em";
	welcomeLabel.style.transition = "margin-top 0.7s";
	
	setTimeout(() => {
		startBtn.style.width = "20vw";
		startBtn.style.opacity = 1;
		startBtn.style.transition = "width 0.5s";
	
		setTimeout(() => {
			startBtn.style.color = "#fff";
		}, 550);	
	}, 1000);
	OnStart();		
}
