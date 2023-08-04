import * as ow_method from "./start.method.js";
import * as ow_var from "./screen.var.js";

function ShowLabel(element, label) {
    element.style.opacity = 0;

    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transition = "opacity 1s";
        element.textContent = label;
    }, 100);
}

function HideLabel(element) {
    setTimeout(() => {
        element.style.opacity = 0;
        element.style.transition = "opacity 1s";
    }, 1000);
}

function CheckConfiguration() {
    ShowLabel(ow_var.loadingLabel, "Checking for configurations...");

    fetch("http://localhost:10000/config/1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default"
    })
    .then(response => {
        return response.json();
    })
    .then(config => {
        if (config.isNewUser == true) {
            HideLabel(ow_var.loadingLabel);

            setTimeout(() => {
                SetAsOldUser();
            }, 2000);
        } else {
            CheckLoginInformation();
        }
    })
    .catch(error => {
        console.log(error);
    });
}

function SetAsOldUser() {
    ShowLabel(ow_var.loadingLabel,
        "Getting Started...");

    fetch("http://localhost:10000/config/1",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isNewUser: false
            })
        })
    .then(error => {
        console.log(error ? error: "PATCH 200 localhost:1000/config/1");
    });

    setTimeout(() => {
        ShowWelcome();
    }, 1000);
}

function ShowWelcome() {
    HideLabel(ow_var.loadingLabel);
    
    setTimeout(() => {
        ow_var.divider.style.width = "90vw";
        ow_var.divider.style.transition = "width 800ms";
        ow_var.divider.style.transitionDelay = "200ms";
        
        ow_var.greetLabel.style.opacity = 1;
        ow_var.greetLabel.style.transition = "opacity 1000ms";
        ow_var.greetLabel.style.transitionDelay = "1500ms";
        
        ow_var.startBtn.style.width = "20vw";
        ow_var.startBtn.style.opacity = 1;
        ow_var.startBtn.style.transition = "all 500ms";
        ow_var.startBtn.style.transitionDelay= "3000ms";
    },
        3000);
}

function HideWelcome() {
    ow_var.startBtn.style.width = 0;
    ow_var.startBtn.style.opacity = 0;
    ow_var.startBtn.style.transition = "all 500ms";
    
    ow_var.greetLabel.style.opacity = 0;
    ow_var.greetLabel.style.transition = "opacity 800ms";
    ow_var.greetLabel.style.transitionDelay = "500ms";
    
    ow_var.divider.style.width = 0;
    ow_var.divider.style.transition = "width 800ms";
    ow_var.divider.style.transitionDelay = "1000ms";
    
    setTimeout(() => {
        ShowLabel(ow_var.loadingLabel, "Please wait...");
        
        ToLoginPage();
    }, 2000);
}

function ToLoginPage() {
    setTimeout(() => {
        HideLabel(ow_var.loadingLabel);
        
        window.location.href = "http://localhost:1024/login.html";
    }, 3000);
}

function CheckLoginInformation() {
    HideLabel(ow_var.loadingLabel);
    ShowLabel(ow_var.loadingLabel, "Checking login information...")
    fetch("http://localhost:10000/config/1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default"
    })
    .then(response => { return response.json(); })
    .then(config => {
        if(config.isAlreadyLoggedIn == false) {
            ToLoginPage();
        } else {
            ow_method.CheckUserLoginInfo();
        }
    })
    .catch(err => { console.log(err); });
}

export async function Setup() {
    await AppStart();
    await CheckConfiguration();
}

export let hideWelcome =  HideWelcome;