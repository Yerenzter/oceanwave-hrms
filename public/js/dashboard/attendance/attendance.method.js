import * as ow_var from "./attendance.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.method.js"; 

export function AddAttendanceLog(employeename, date, timein, timeout) {
    fetch("http://localhost:10004/attendance", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            log: `[${date}, ${timeout}] ${employeename} has signed the attendance from ${timein} to ${timeout} respectively.`
        })
    })
    .then(error => {
        let response = new Response();
        
        if(response.status == 200) {
            ow_sb_method.Show("Successfully post the attendance log to server");
        }
    })
    .catch(error => {
        ow_sb_method.Show(error);
    });
}

export function CreateAttendanceLog(log) {
    let attendanceLog = document.createElement("div");
    let attendanceLogLabel = document.createElement("span");
    
    attendanceLog.className = "ow-attendance-log";
    attendanceLogLabel.className = "ow-attendance-log-label";
    
    attendanceLogLabel.textContent = log;
    
    attendanceLog.appendChild(attendanceLogLabel);
    ow_var.alp2.appendChild(attendanceLog);
}

export function ClearAttendanceForm() {
    ow_var.employeename.value = "";
    ow_var.date.value = "";
    ow_var.timein.value = "";
    ow_var.timeout.value = "";
}