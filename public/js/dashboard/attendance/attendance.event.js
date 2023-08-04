import * as ow_method from "./attendance.method.js";
import * as ow_updater from "./attendance.updater.js";
import * as ow_var from "./attendance.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.method.js";

for(let ry = 0; ry < ow_var.atb.length; ry++) {
    ow_var.atb[ry].addEventListener("click", () => {
        for(var r of ow_var.atb) {
            r.style.backgroundColor = r == ow_var.atb[ry] ? ow_var.blue : ow_var.transparent;
        }
        
        for(var y of ow_var.ati) {
            y.style.color = y == ow_var.ati[ry] ? ow_var.white : ow_var.blue;
        }
        
        for(var n of ow_var.atl) {
            n.style.color = n == ow_var.atl[ry] ? ow_var.white : ow_var.blue;
        }
        
        for(var m of ow_var.alp) {
            m.style.zIndex = m== ow_var.alp[ry] ? 1 : 0;
        }
    });
}

ow_var.attendanceActionBtn.addEventListener("click", () => {
    if(ow_var.employeename.value == "" ||
       ow_var.date.value == "" ||
       ow_var.timein.value == "" ||
       ow_var.timeout.value == "") {
        ow_sb_method.Show("You need to fill all the inputs.");
    } else {
        ow_sb_method.Show("You signed an attendance successfully.");
        ow_updater.FetchAttendanceLog();
        ow_method.AddAttendanceLog(ow_var.employeename.value, ow_var.date.value, ow_var.timein.value, ow_var.timeout.value);
        ow_method.ClearAttendanceForm();
    }
});