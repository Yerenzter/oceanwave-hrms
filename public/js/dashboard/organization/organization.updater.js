import * as ow_method from "./organization.method.js";
import * as ow_var from "./organization.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.js";

export function FetchOrganizationData(endpoint) {
    fetch(`http://localhost:10003/${ow_var.organizations[endpoint]}`, {
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
    .then(organization => {
        ow_method.AddOrganizationData(organization[organization.length-1].id, organization[organization.length-1].name, endpoint);
        ow_method.AddToOrganizationSelection(organization[organization.length-1].name, endpoint);
        ow_method.ActivateOrganizationEdit(organization.length-1, endpoint);
        ow_method.ActivateOrganizationDelete(organization.length-1, endpoint);
    })
    .catch(error => {
        console.log(error);
    });
}

export function GetOrganizationData(endpoint) {
    fetch(`http://localhost:10003/${ow_var.organizations[endpoint]}`, {
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
    .then(organization => {
        for(let r=0; r < organization.length; r++) {
            ow_method.RemoveAllOrganizationData(endpoint);
            ow_method.AddOrganizationData(organization[r].id, organization[r].name, endpoint);
            ow_method.AddToOrganizationSelection(organization[r].name, endpoint);
            ow_method.ActivateOrganizationDelete(r, endpoint);
        }
    })
    .catch(error => {
        console.log(error);
    });
}

;(
fetch("http://localhost:10003/designation", {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    mode: "cors",
    cache: "default"
})
.then(response => {
    return response.json();
})
.then(designation => {
    for(let r=0; r < designation.length; r++) {
        ow_method.AddOrganizationData(designation[r].id, designation[r].name, 0);
        ow_method.ActivateOrganizationEdit(r, 0);
        ow_method.ActivateOrganizationDelete(r, 0);
    }
})
.catch(error => {
    console.log(error);
})
);

;(
fetch("http://localhost:10003/department", {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    mode: "cors",
    cache: "default"
})
.then(response => {
    return response.json();
})
.then(department => {
    for(let r=0; r < department.length; r++) {
        ow_method.AddOrganizationData(department[r].id, department[r].name, 1);
        ow_method.ActivateOrganizationEdit(r, 1);
        ow_method.ActivateOrganizationDelete(r, 1);
    }
})
.catch(error => {
    console.log(error);
})
);