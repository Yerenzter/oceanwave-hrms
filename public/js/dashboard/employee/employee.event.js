import * as ow_var from "./employee.var.js";
import * as ow_method from "./employee.method.js";
import * as ow_updater from "./employee.updater.js";
import * as ow_organization_method from "../organization/organization.method.js";

ow_var.actionBtn.addEventListener("click", ow_method.AddEmployee);

for(let r=0; r < ow_var.FormText.length; r++) {
    ow_var.FormText[r].addEventListener("input", ow_method.ShowClear);
    ow_var.ClearBtn[r].addEventListener("click", () => {
        ow_var.ClearBtn[r].style.visibility = "hidden";
        ow_var.FormText[r].value = "";
    });
}

for(let r=0; r < ow_var.OrganizationSelection.length; r++) {
    ow_var.OrganizationSelection[r].addEventListener("click", ow_method.GetOrganizationSelectionList(r));
}