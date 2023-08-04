import * as ow_var from "./snackbar.var.js";

export function Show(label) {
    ow_var.snackbarLabel.textContent = label;
    
    ow_var.snackbar.style.visibility = "visible";
    ow_var.snackbar.style.transform = "scale(1)";
    
    setTimeout(() => {
        ow_var.snackbar.style.transform = "scale(0.8)";
        ow_var.snackbar.style.visibility = "hidden";
    }, 2000);
}

export function Hide() {
    ow_var.snackbar.style.visibility = "hidden";
}