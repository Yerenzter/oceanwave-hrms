import * as ow_method from "./../login/login.method.js";

export function CheckUserLoginInfo() {
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
        ow_method.CheckUserRoleType(profile.role);
    })
    .catch();
}