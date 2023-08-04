import * as ow_var from "./employee.var.js";
import * as ow_organization_method from "../organization/organization.method.js";
import * as ow_updater_method from "../account/account.updater.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.method.js";

export function AddEmployee() {
    fetch("http://localhost:10001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            lastname: ow_var.lastname.value,
            firstname: ow_var.firstname.value,
            middlename: ow_var.middlename.value,
            extension: ow_var.extension.value,
            birthday: ow_var.birthday.value,
            age: ow_var.age.value,
            gender: ow_var.gender.value,
            civilstatus: ow_var.civilstatus.value,
            email: ow_var.email.value,
            phonenumber: ow_var.contactnumber.value,
            address: ow_var.address.value,
            datejoined: ow_var.datejoined.value,
            designation: ow_var.designation.value,
            department: ow_var.department.value,
            username: ow_var.username.value,
            password: ow_var.password.value,
            role: ow_var.role.value
        })
    })
    .then(() =>{
        let response = new Response();
        
        for(let r=0; r < ow_var.FormText.length; r++) {
            ow_var.FormText[r].value = "";
        }
        
        ow_updater_method.FetchAccountData();   
        ow_sb_method.Show(response.status == 200 ? "Employee added successfully." : "Employee added failed.");
    })
    .catch(error => {
        ow_sb_method.Show(error);
    });
}

export function RemoveAllOptionList(parent, className) {
    let Option = document.querySelectorAll(`.${className}`);
    
    for(let r =0; r < Option.length; r++) {
        parent.removeChild(Option[r]);
    }
}

export function GetOrganizationSelectionList(type) {
    let organizations = ["designation", "department"];
    fetch(`http://localhost:10003/${organizations[type]}`, {
        method: "GET",
        headers: {
            "Content-Type": "applocation/json"
        },
        mode: "cors",
        cache: "default"
    })
    .then(response => {
        return response.json();
    })
    .then(organization => {
        for(let r=0; r < organization.length; r++) {
            ow_organization_method.AddToOrganizationSelection(organization[r].name, type);
        }
    })
    .catch(error => {
        if(error) {
            ow_sb_method.Show("Failed to fetch");
        }
    });
}

export function ShowClear() {
    for(let r=0; r < ow_var.FormText.length; r++) {
        ow_var.ClearBtn[r].style.visibility = ow_var.FormText[r].value != "" ? "visible" : "hidden";
    }
}