import * as ow_redirect from "./login.redirect.js";
import * as ow_var from "./login.var.js";
import * as ow_sb_method from "../ui/snackbar/snackbar.method.js";

export function ReactIcon() {
    ow_var.person.style.color = ow_var.loginUsernameInput.value != "" ? ow_var.blue : ow_var.black;
    ow_var.lock.style.color = ow_var.loginPasswordInput.value != "" ? ow_var.blue : ow_var.black;
    
    for(let r=0; r < ow_var.TextInput.length; r++) {
        ow_var.ClearBtn[r].style.visibility = ow_var.TextInput[r].value != "" ? "visible" : "hidden";
    }
}

export function ToSignupPage() {
    window.location.href = "http://localhost:1024/signup.html";
}

export function CheckUserRoleType(role) {
    switch(role) {
        case "admin":
            ow_redirect.ToAdminDashboard();
            break;
        case "auditor":
            ow_redirect.ToAuditorDashboard();
            break;
        case "employee":
            ow_redirect.ToEmployeeDashboard();
            break;
        case "manager":
            ow_redirect.ToManagerDashboard();
            break;
        case "officer":
            ow_redirect.ToOfficerDashboard();
            break;
        case "supervisor":
            ow_redirect.ToSupervisorDashboard();
            break;
    }
}

export function SetUserProfileInfo(userID,
user, 
type,
userLastname,
userFirstname,
userMiddlename,
userExtension,
userBirthday,
userAge,
userGender,
userCivilStatus,
userEmail,
userContactNumber,
userAddress,
userDesignation,
userDepartment) {
    fetch("http://localhost:10002/profile/0", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: userID,
            username: user,
            role: type,
            lastname: userLastname,
            firstname: userFirstname,
            middlename: userMiddlename,
            extension: userExtension,
            birthday: userBirthday,
            age: userAge,
            gender: userGender,
            civilstatus: userCivilStatus,
            email: userEmail,
            contactnumber: userContactNumber,
            address: userAddress,
            designation: userDesignation,
            department: userDepartment
        })
    })
    .then(error => {
        console.log(error);
    })
    .catch(error => {
        console.log(error);
    });
}

export function AuthenticateLogin(loginState) {
    fetch("http://localhost:10006/auth/0", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            isUserLoggedIn: loginState
        })
    })
    .then(error => {
        ow_sb_method.Show(error);
    })
    .catch(error => {
        ow_sb_method.Show(error);
    });
}