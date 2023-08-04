import * as ow_var from "./dashboard.var.js";
import {loader} from "../ui/loader/loader.js";
import * as login from "../login/login.method.js";

export function GetUserInfo() {
    fetch("http://localhost:10002/profile/0", {
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
    .then(profile => {
        ow_var.username.textContent = profile.username;
        ow_var.role.textContent = profile.role;
    })
    .catch(error => {
        console.log(error);
    });
}

export function Logout() {
	loader[0].Show();
	login.AuthenticateLogin(false);
    login.SetUserProfileInfo("Username", "Role");
	setTimeout(() => {
		window.location.href = "http://localhost:1024/login.html";
	}, 3000);
}