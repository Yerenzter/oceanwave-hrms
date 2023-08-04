import * as ow_var from "./loader.var.js";

export function Show() {
	ow_var.loader.style.visibility = "visible";
}

export function Hide() {
	ow_var.loader.style.visibility = "hidden";
}