import * as ow_var from "./payroll.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.method.js";

export function ValidatePayrollForm() {
	if(ow_var.employeeId.value == "" ||
	ow_var.salaryPerHour.value == "" ||
	ow_var.numberOfWorkhours.value == "") {
		ow_sb_method.Show("You need to fill all fields.");
	} else {
		CalculateSalary();
		ClearPayrollForm();
	}
}

export function ClearPayrollForm() {
	ow_var.employeeId.value = "";
	ow_var.salaryPerHour.value = "";
	ow_var.numberOfWorkhours.value = "";
}

export function CalculateSalary() {
	let salaryPerHour = ToInt(ow_var.salaryPerHour.value);
	let numberOfWorkhours = ToInt(ow_var.numberOfWorkhours.value);
	let totalSalary = salaryPerHour * numberOfWorkhours;
	let dailySalary = totalSalary;
	let weeklySalary = totalSalary * 7;
	let monthlySalary = totalSalary * 30;
	let quarterlySalary = totalSalary * 90;
	let annualSalary = totalSalary * 365;
	
	ow_var.payrollDaily.textContent =  `Daily salary: ${dailySalary}`;
	ow_var.payrollWeekly.textContent = `Weekly salary: ${weeklySalary}`;
	ow_var.payrollMonthly.textContent = `Monthly salary: ${monthlySalary}`;
	ow_var.payrollQuarterly.textContent = `Quarterly salary: ${quarterlySalary}`;
	ow_var.payrollAnnual.textContent = `Annual salary: ${annualSalary}`;	
}

export function ToInt(arg) {
	return arg - [];
}