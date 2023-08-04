import * as ow_method from "./payroll.method.js";
import * as ow_var from "./payroll.var.js";

for(let ry=0; ry < ow_var.ptb.length; ry++) {
	ow_var.ptb[ry].addEventListener("click", () => {
		for(var r of ow_var.ptb) {
			r.style.backgroundColor = r == ow_var.ptb[ry] ? ow_var.blue : ow_var.transparent;
		}
		
		for(var y of ow_var.pti) {
			y.style.color = y == ow_var.pti[ry] ? ow_var.white : ow_var.blue;
		}
		
		for(var n of ow_var.ptl) {
			n.style.color = n == ow_var.ptl[ry] ? ow_var.white : ow_var.blue;
		}
		
		for(var m of ow_var.pp) {
			m.style.zIndex = m == ow_var.pp[ry] ? 1 : 0;
		}
	});
}

ow_var.payrollActionBtn.addEventListener("click", () => {
	ow_var.payrollActionBtn.style.transform = "scale(0.8)";
	
	setTimeout(() => {
		ow_var.payrollActionBtn.style.transform = "scale(1)";
	}, 100);
	
	ow_method.ValidatePayrollForm();
});