import * as ow_var from "./signup.var.js";

export function CreateAccount() {
    let account = {
        lastname: "N/A",
        firstname: "N/A",
        middlename: "N/A",
        birthday: "??-??-?????",
        age: "N/A",
        gender: "N/A",
        civilstatus: "N/A",
        email: "N/A",
        phonenumber: "N/A",
        address: "N/A",
        datejoined: "N/A",
        designation: "N/A",
        department: "N/A",
        username: ow_var.username.value,
        password: ow_var.password.value,
        role: GetRole(ow_var.roleSpinnerLabel.textContent)
    }
    
    fetch("http://localhost:10001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(account)
    })
    .then(error => { console.log(error); })
    .catch(error => { console.log(error); });
}

export function GetRole(role) {
    switch(role) {
        case "Audtor":
            return "auditor";
            break;
        case "Admin":
            return "admin";
            break;
        case "Employee":
            return "employee";
            break;
        case "HR Manager":
            return "manager";
            break;
        case "HR Officer":
            return "officer";
            break;
        case "Supervisor":
            return "supervisor";
            break;
    }
}