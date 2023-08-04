import * as ow_method from "./login.method.js";
import * as ow_var from "./login.var.js";

export function ValidateLogin() {
    fetch("http://localhost:10001/users/", {
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
        .then((users) => {
            for (var user of users) {
                if (
                    ow_var.loginUsernameInput.value != user.username &&
                    ow_var.loginUsernameInput.value !== "" &&
                    ow_var.loginPasswordInput.value.length != 0
                ) {
                    ow_var.loginMessageLabel.textContent =
                        "Account does not exist.";
                } else if (
                    ow_var.loginUsernameInput.value == user.username &&
                    ow_var.loginUsernameInput.value != "" &&
                    ow_var.loginPasswordInput.value != user.password &&
                    ow_var.loginPasswordInput.value != ""
                ) {
                    ow_var.loginMessageLabel.textContent = "Wrong password.";
                } else if (
                    ow_var.loginUsernameInput.value == user.username &&
                    ow_var.loginUsernameInput.value != "" &&
                    ow_var.loginPasswordInput.value == ""
                ) {
                    ow_var.loginMessageLabel.textContent =
                        "You forgot to enter the password.";
                } else if (
                    ow_var.loginUsernameInput.value != user.username &&
                    ow_var.loginUsernameInput.value != "" &&
                    ow_var.loginPasswordInput.value == ""
                ) {
                    ow_var.loginMessageLabel.textContent =
                        "You forgot to enter the password.";
                } else if (
                    ow_var.loginUsernameInput.value == "" &&
                    ow_var.loginPasswordInput.value.length != 0
                ) {
                    ow_var.loginMessageLabel.textContent =
                        "You forgot to enter the username.";
                } else if (
                    ow_var.loginUsernameInput.value == "" &&
                    ow_var.loginPasswordInput.value == ""
                ) {
                    ow_var.loginMessageLabel.textContent =
                        "You must log in first.";
                } else {
                    ow_var.loginMessageLabel.textContent = "Successfully logged in.";
                    ow_method.AuthenticateLogin(ow_var.loggedIn);
                    ow_method.CheckUserRoleType(user.role);
                    ow_method.SetUserProfileInfo(user.id,
                    user.username,
                    user.role,
                    user.lastname,
                    user.firstname,
                    user.middlename,
                    user.extension,
                    user.birthday,
                    user.age,
                    user.gender,
                    user.civilstatus,
                    user.email,
                    user.phonenumber,
                    user.address,
                    user.datejoined,
                    user.designation,
                    user.department);
                    break;
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
}