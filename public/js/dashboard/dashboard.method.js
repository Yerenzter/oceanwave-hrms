import * as ow_var from "./dashboard.var.js";

export function ShowAccountMenu() {
	ow_var.accountMenu.style.transform = "scale(1)";
	ow_var.accountMenu.style.opacity = 1;
}

export function HideAccountMenu() {
	ow_var.accountMenu.style.transform = "scale(0)";
	ow_var.accountMenu.style.opacity = 0;
}

export function ShowAccountSettings() {
	ow_var.accountSettings.style.transform = "scale(1)";
	ow_var.accountSettings.style.opacity = 1;
}

export function HideAccountSettings() {
	ow_var.accountSettings.style.transform = "scale(0)";
	ow_var.accountSettings.style.opacity = 0;
}

export function ToHelp() {
	alert("Help");
}