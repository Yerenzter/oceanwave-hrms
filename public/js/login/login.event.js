import * as ow_method from "./login.method.js";
import * as ow_var from "./login.var.js";
import * as ow_validator from "./login.validator.js";

ow_var.loginBtn.addEventListener("click", ow_validator.ValidateLogin);
ow_var.loginSignupBtn.addEventListener("click", ow_method.ToSignupPage);
ow_var.loginUsernameInput.addEventListener("input", ow_method.ReactIcon);
ow_var.loginPasswordInput.addEventListener("input", ow_method.ReactIcon);

for(let r=0; r < ow_var.ClearBtn.length; r++) {
    ow_var.ClearBtn[r].addEventListener("click", () => {
        ow_var.TextInput[r].value = "";
        ow_var.ClearBtn[r].style.visibility = "hidden";
        ow_var.IconLeft[r].style.color = ow_var.black;
    });
}