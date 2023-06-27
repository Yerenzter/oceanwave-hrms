let welcomeLabel = document.querySelector("#welcome-label");
let startBtn = document.querySelector("#start-btn");
let loadingLabel = document.querySelector("#loading-label");

function GetReady() {
	OnStart();
	VerifyConfig();	
}

function VerifyConfig() {
	ShowLoadingLabel("Checking configurations...");
	
	setTimeout(() => {
		VerifyPreferences();	
	}, 3000);
}

function VerifyPreferences() {
	fetch("data/config/config.json", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		mode: "cors",
		cache: "default"
	}).then(r => {
		return r.json();	
	}).then(status => {
		if(status.isFirstTimeUser == true) {
			HideloadingLabel();
			setTimeout(() => {
				ShowLoadingLabel("Setting things up...");
				
				setTimeout(() => {
					HideloadingLabel();
					
					setTimeout(() => {
						ShowLoadingLabel("Almost done!");
						
						setTimeout(() => {
							HideloadingLabel();
							PopupWelcome();	
						}, 1000);	
					},500);	
				},3000);	
			}, 500);
		} else {
			ToDashboard();	
		}
	});
}

function ShowLoadingLabel(args) {
	loadingLabel.style.opacity = 1;
	loadingLabel.style.transition = "opacity 0.5s";
	loadingLabel.textContent = args;	
}

function HideloadingLabel() {
	setTimeout(() => {
		loadingLabel.style.opacity = 0;
		loadingLabel.style.transition = "opacity 0.5s";	
	}, 0);	
}

function ToDashboard() {
	window.location.href = "dashboard.html";	
}

function ToLogin() {
	window.location.href = "login.html";	
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
}

function HideWelcome() {
	startBtn.style.width = "0vw";
	startBtn.style.color = "#00000000";
	startBtn.style.transition = "width 0.5s";
	
	setTimeout(() => {
		startBtn.style.opacity = 0;
		
		setTimeout(() => {
			welcomeLabel.style.marginTop = "10em";
			welcomeLabel.style.transition = "margin-top 2s";
			
			setTimeout(() => {
				ShowLoadingLabel("Please wait...");
				
				setTimeout(() => {
					ToLogin();
				}, 3000);	
			}, 100);	
		},400);
	}, 200);
}
