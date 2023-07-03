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

function AlreadyOldTimer() {
    let config = {
        isFirstTimeUser: false,
    };
    fetch("http://localhost:10/config/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
    })
        .then((error) => {
            console.log(
                error ? "STATUS_CODE::403" : "JSON is updated successfully."
            );
        })
        .catch((error) => {
            console.log(error);
        });
}

function VerifyPreferences() {
    fetch("data/config/config.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
    })
        .then((response) => {
            return response.json();
        })
        .then((status) => {
            HideLoadingLabel();
            return status;
        })
        .then((status) => {
            setTimeout(() => {
                if (status.config[0].isFirstTimeUser == true) {
                    ShowLoadingLabel("Setting things up...");
                    AlreadyOldTimer();

                    setTimeout(() => {
                        HideLoadingLabel();

                        setTimeout(() => {
                            ShowLoadingLabel("Getting started...");

                            setTimeout(() => {
                                HideLoadingLabel();
                                setTimeout(() => {
                                    ShowLoadingLabel("Almost done!");

                                    setTimeout(() => {
                                        HideLoadingLabel();
                                        PopupWelcome();
                                    }, 3000);
                                }, 500);
                            }, 3000);
                        }, 500);
                    }, 3000);
                } else if (status.config[0].isAlreadyLoggedIn == false) {
                    ShowLoadingLabel("Preparing for log in...");
                    setTimeout(() => {
                        HideLoadingLabel();
                        ToLogin();
                    }, 3000);
                } else if (
                    status.config[0].isFirstTimeUser == false &&
                    status.config[0].isAlreadyLoggedIn == true
                ) {
                    ShowLoadingLabel("Navigating to you in admin dashboard...");

                    setTimeout(() => {
                        HideLoadingLabel();
                        ToDashboard();
                    }, 3000);
                } else {
                    ShowLoadingLabel("Please wait...");

                    setTimeout(() => {
                        HideLoadingLabel();
                        ToDashboard();
                    }, 3000);
                }
            }, 500);
        });
}

function ShowLoadingLabel(args) {
    loadingLabel.style.opacity = 1;
    loadingLabel.style.transition = "opacity 0.5s";
    loadingLabel.textContent = args;
}

function HideLoadingLabel() {
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
        }, 400);
    }, 200);
}
