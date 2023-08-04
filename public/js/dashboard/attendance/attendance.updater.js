import * as ow_method from "./attendance.method.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.js";

export function FetchAttendanceLog() {
    fetch("http://localhost:10004/attendance", {
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
    .then(attendance => {
        ow_method.CreateAttendanceLog(attendance[attendance.length-1].log);
    })
    .catch(error => {
        if(error) {
            ow_sb_method.Show("Failed to get an attendance log data.");
        }
    });
}

;(fetch("http://localhost:10004/attendance", {
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
    .then(attendance => {
        for(let r=0; r < attendance.length; r++) {
            ow_method.CreateAttendanceLog(attendance[r].log);
        }
    })
    .catch(error => {
        if(error) {
            ow_sb_method.Show("Failed to get an attendance log data.");
        }
    })
 );