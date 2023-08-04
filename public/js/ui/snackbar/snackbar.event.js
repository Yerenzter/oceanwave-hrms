import * as ow_var from "./snackbar.var.js";

ow_var.snackbarClose.addEventListener("click", () => {
    ow_var.snackbar.style.transform = "scale(0.8)";
    ow_var.snackbar.style.visibility = "hidden";
});