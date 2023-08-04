import * as ow_var from "./leave.var.js";
import * as ow_method from "./leave.method.js";
import * as ow_updater from "./leave.updater.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.method.js";

for(let ry=0; ry < ow_var.lb.length; ry++) {
    ow_var.lb[ry].addEventListener("click", () => {
        for(var r of ow_var.lb) {
            r.style.backgroundColor = r == ow_var.lb[ry] ? ow_var.blue : ow_var.transparent;
        }
        
        for(var y of ow_var.li) {
            y.style.color = y == ow_var.li[ry] ? ow_var.white : ow_var.blue;
        }
        
        for(var n of ow_var.ll) {
            n.style.color = n == ow_var.ll[ry] ? ow_var.white : ow_var.blue;
        }
        
        for(var m of ow_var.lp) {
            m.style.zIndex =  m == ow_var.lp[ry] ? 1 : 0;
        }
    });
}

ow_var.addLeaveBtn.addEventListener("click", () => {
    if(ow_var.addText.value == "") {
        ow_sb_method.Show("You need to fill this input.");
    } else {
        ow_updater.FetchLeaveTypeData();
        ow_updater.AddToLeaveType(ow_var.addText.value);
        ow_var.addText.value = "";
    }
});