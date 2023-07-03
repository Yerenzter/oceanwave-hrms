let loginValidatorLabel = document.querySelector("#login-validator-label");
let user = document.querySelector("#username");
let passcode = document.querySelector("#password");
let loginBtn = document.querySelector("#login-btn");

function IsAlreadyLoggedIn() {
    let json = {
        isAlreadyLoggedIn: true,
    };
    fetch("http://localhost:10/config/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })
        .then((error) => {
            console.log(
                error ? "STATUS_CODE::403" : "JSON is patched successfully."
            );
        })
        .catch((error) => {
            console.log(error);
        });
}

function ValidateUserLogin() {
    fetch("data/admin/admin.json", {
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
        .then((admin) => {
            if (
                user.value == admin.username &&
                passcode.value == admin.password
            ) {
                loginValidatorLabel.textContent = "Successfully logged in.";
                loginBtn.textContent = "Please wait";
                IsAlreadyLoggedIn();
                LoginLoading();
                
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 3000);
            } else if (
                user.value == admin.username &&
                passcode.value != admin.password &&
                passcode.value.length > 0
            ) {
                loginValidatorLabel.textContent = "Wrong password.";
            } else if (user.value.length == 0 && passcode.value.length == 0) {
                loginValidatorLabel.textContent = "You must log in first.";
            } else if (user.value.length > 0 && user.value != admin.username) {
                loginValidatorLabel.textContent = "User does not exist.";
            } else if (user.value != admin.username && passcode.value > 0) {
                loginValidatorLabel.textContent = "User does not exist.";
            } else if (
                user.value == admin.username &&
                passcode.value.length == 0
            ) {
                loginValidatorLabel.textContent =
                    "You forgot to enter a password.";
            } else if (user.value.length > 0 && passcode.value.length == 0) {
                loginValidatorLabel.textContent =
                    "You forgot to enter a password.";
            } else if (
                user.value.length == 0 &&
                passcode.value == admin.password
            ) {
                loginValidatorLabel.textContent =
                    "You forgot to enter an username.";
            } else if (user.value.length == 0 && passcode.value.length > 0) {
                loginValidatorLabel.textContent =
                    "You forgot to enter an username.";
            } else {
                loginValidatorLabel.textContent = "Someting went wrong.";
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

loginBtn.onclick = () => {
    ValidateUserLogin();
};
