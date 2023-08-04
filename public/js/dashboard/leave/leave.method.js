import * as ow_var from"./leave.var.js";

export function CreateLeaveData(label) {
    let leaveData = document.createElement("div");
    let leaveLabel = document.createElement("span");
    let leaveOptionBtn = document.createElement("button");
    
    leaveData.className = "ow-leave-data";
    leaveLabel.className = "ow-leave-label";
    leaveOptionBtn.className = `${ow_var.outlined} ow-leave-option-btn`;
    
    leaveLabel.textContent = label;
    leaveOptionBtn.textContent = "more_vert";
    
    leaveData.appendChild(leaveLabel);
    leaveData.appendChild(leaveOptionBtn);
    ow_var.leaveAddPage.appendChild(leaveData);
}