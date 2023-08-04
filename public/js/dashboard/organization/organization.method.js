import * as ow_updater from "./organization.updater.js";
import * as ow_var from "./organization.var.js";
import * as ow_employee_var from "../employee/employee.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.js";

export function CreateOrganizationData(label, type) {
    fetch(`http://localhost:10003/${ow_var.organizations[type]}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: label
        })
    })
    .then(error => {
        console.log(error);
    })
    .catch(error => {
        console.log(error);
    });
}

export function UpdateOrganizationData(id, label, type) {
    fetch(`http://localhost:10003/${ow_var.organizations[type]}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: label
        })
    })
    .then(error => {
        console.log(error);
    })
    .catch(error => {
        console.log(error);
    });
}

export function DeleteOrganizationData(id, type) {
    fetch(`http://localhost:10003/${ow_var.organizations[type]}/${id}`, {
        method: "DELETE"
    })
    .then(error => {
        console.log(error);
    })
    .catch(error => {
        console.log(error);
    });
}

export function AddOrganizationData(id, name, type) {
    let organizationData = document.createElement("div");
    let organizationId = document.createElement("span");
    let organizationLabel = document.createElement("span");
    let organizationEdit = document.createElement("span");
    let organizationDelete = document.createElement("span");
    
    organizationData.className = `ow-${ow_var.organizations[type]}-data`;
    organizationId.className = `ow-${ow_var.organizations[type]}-id`;
    organizationLabel.className = `ow-${ow_var.organizations[type]}-label`;
    organizationEdit.className = `${ow_var.outlined} ow-${ow_var.organizations[type]}-edit`;
    organizationDelete.className = `${ow_var.outlined} ow-${ow_var.organizations[type]}-delete`;
    
    organizationId.textContent = id;
    organizationLabel.textContent = name;
    organizationEdit.textContent = "edit";
    organizationDelete.textContent = "delete";
    
    organizationData.appendChild(organizationId);
    organizationData.appendChild(organizationLabel);
    organizationData.appendChild(organizationEdit);
    organizationData.appendChild(organizationDelete);
    ow_var.pgc[type].appendChild(organizationData);
}

export function AddToOrganizationSelection(label, type) {
    let select = document.querySelector(`#${ow_var.organizations[type]}`);
    let option = document.createElement("option");
    
    option.className = `.${ow_var.organizations[type]}-option`;
    option.value = label;
    option.textContent = label;
    
    select.appendChild(option);
}

export function UpdateToOrganizationSelection(position, label, type) {
    let select = document.querySelector(`#${ow_var.organizations[type]}`);
    let option = document.querySelectorAll(`.${ow_var.organizations[type]}-option`);
    
    option[position].value = label;
    option[position].textContent = label;
}

export function DeleteToOrganizationSelection(position, type) {
    let select = document.querySelector(`#${ow_var.organizations[type]}`);
    let option = document.querySelectorAll(`.${ow_var.organizations[type]}-option`);
    
    select.removeChild(option[position]);
}

export function ActivateOrganizationEdit(position, type) {
    let organizationId = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-id`);
    let organizationLabel = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-label`);
    let organizationEdit = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-edit`);
    
    organizationEdit[position].addEventListener("click", () => {
        TriggerEditOrganization(position, type);
    });
}

export function ActivateOrganizationDelete(position,type){
    let organizationData = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-data`);
    let organizationId = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-id`);
    let organizationDelete = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-delete`);
    
    organizationDelete[position].addEventListener("click", () => {
        ow_var.pgc[type].removeChild(organizationData[position]);
        DeleteOrganizationData(organizationId[position].textContent, type);
        DeleteToOrganizationSelection(position, type);
    });
}

export function TriggerEditOrganization(position, type) {
    let organizationId = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-id`);
    let organizationLabel = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-label`);
    let organizationEdit = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-edit`);
    
    organizationLabel[position].contentEditable = true;
    organizationLabel[position].style.backgroundColor =  "#33333324";
    
    organizationEdit[position].textContent = "check";
    organizationEdit[position].addEventListener("click", () => {
        UpdateOrganizationData(organizationId[position].textContent, organizationLabel[position].textContent, type);
        DoneEditOrganization(position, type);
    });
}

export function DoneEditOrganization(position, type) {
    let organizationId = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-id`);
    let organizationLabel = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-label`);
    let organizationEdit = document.querySelectorAll(`.ow-${ow_var.organizations[type]}-edit`);
    
    organizationLabel[position].contentEditable = false;
    organizationLabel[position].style.backgroundColor = "#00000000";
    
    organizationEdit[position].textContent = "edit";
    organizationEdit[position].addEventListener("click", () => {
        TriggerEditOrganization(position, type);
    });
}

export function RemoveAllOrganizationData(type) {
    let organizationData = document.querySelectorAll(`.ow-${ow_var.organization[type]}-data`);
    
    for(let r=0; r < organizationData.length; r++) {
        ow_var.pgc[type].removeChild(organizationData[r]);
    }
}