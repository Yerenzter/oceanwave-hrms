let menu = document.querySelector("#menu");
let menuBtn = document.querySelectorAll(".menu-btn");
let container = document.querySelector("#container");

function InitializeDashboard() {
    OnStart();
    GetEmployeeList();
    OnDashboardWelcomesYou();
}

function OnDashboardWelcomesYou() {
	menu.style.marginRight = "0em";
	menu.style.transition = "margin-right 0.5s";
	
	for(let r=0; r < menuBtn.length; r++) {	
		menuBtn[r].style.visibility = "visible";
		menuBtn[r].style.opacity = 1;
		menuBtn[r].style.transition = "opacity 1s";
		menuBtn[r].style.transitionDelay = "0.3s";
	}
	
	container.style.visibility = "visible";
	container.style.opacity = 1;
	container.style.transition = "opacity 0.5s";
	container.style.transitionDelay = "0.7s";
}
