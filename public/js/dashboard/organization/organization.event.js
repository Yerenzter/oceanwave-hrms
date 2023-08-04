import * as ow_var from "./organization.var.js";
import * as ow_method from "./organization.method.js";
import * as ow_updater from "./organization.updater.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.method.js";

for(let ry=0; ry < ow_var.tb.length; ry++) {
    ow_var.tb[ry].addEventListener("click", () => {
        for(var r of ow_var.tb) {
            r.style.backgroundColor = r == ow_var.tb[ry] ? ow_var.blue : ow_var.transparent;
        }
        
        for(var y of ow_var.tbi) {
            y.style.color = y == ow_var.tbi[ry] ? ow_var.white : ow_var.blue;
        }
        
        for(var n of ow_var.tbl) {
            n.style.color = n == ow_var.tbl[ry] ? ow_var.white : ow_var.blue;
        }
        
        for(var m of ow_var.pg) {
            m.style.zIndex = m == ow_var.pg[ry] ? 1 : 0;
        }
    });
}

for(let r=0; r < ow_var.AddBtn.length; r++) {
    ow_var.AddBtn[r].addEventListener("click", () => {
        if(ow_var.AddInputText[r].value == "") {
            ow_sb_method.Show("You need to fill this input.");
        } else {
            ow_method.CreateOrganizationData(ow_var.AddInputText[r].value, r);
            ow_updater.FetchOrganizationData(r);
            ow_var.AddInputText[r].value = "";
        }
    });
}