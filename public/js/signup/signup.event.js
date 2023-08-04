import * as ow_account from "./signup.account.js";
import * as ow_method from"./signup.method.js";
import * as ow_var from "./signup.var.js";

ow_var.spinnerBtn.addEventListener("click", () => {
    ow_var.spinnerItem.style.height = "300px";
    ow_var.spinnerItem.style.transition = "all 150ms";
}); 

for(let r=0; r < ow_var.SpinnerBtn.length; r++) {
    ow_var.SpinnerBtn[r].addEventListener("click", () => {
        ow_var.spinnerItem.style.height = 0;
        ow_var.spinnerItem.style.transition = "all 150ms";
        
        ow_var.roleSpinnerLabel.textContent = ow_var.SpinnerBtn[r].textContent;
    });
}

for(let r=0; r < ow_var.SignupIcon.length; r++) {
    ow_var.TextInput[r].addEventListener("input", () => {
        ow_var.SignupIcon[r].style.color = ow_var.TextInput[r].value != "" ? ow_var.blue : ow_var.black;
        ow_var.ClearBtn[r].style.visibility = ow_var.TextInput[r].value != "" ? "visible" : "hidden";
    });
    
    ow_var.ClearBtn[r].addEventListener("click", () => {
        ow_var.TextInput[r].value = "";
        ow_var.SignupIcon[r].style.color = ow_var.black;
        ow_var.ClearBtn[r].style.visibility = "hidden";
    });
}

ow_var.signupBtn.addEventListener("click", () => {
    ow_account.CreateAccount();
    ow_method.ToLoginPage();
});