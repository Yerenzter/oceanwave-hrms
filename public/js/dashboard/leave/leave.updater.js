import * as ow_method from "./leave.method.js";
import * as ow_var from "./leave.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.js"
 
export function AddToLeaveType(label) {
	fetch("http://localhost:10005/type", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: label
		}, null, 4)
	})
	.then(error => {
		ow_sb_method.Show(error);
	})
	.catch(error => {
		ow_sb_method.Show(error);
	});
}
 
export function FetchLeaveTypeData() {
	fetch("http://localhost:10005/type", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		mode: "cors",
		cache: "default"
	})
	.then(response =>{
		return response.json();
	})
	.then(type => {
		ow_method.CreateLeaveData(type[type.length-1].name);
	})
	.catch(error => {
		ow_sb_method.Show(error);
	});
}

;(
	fetch("http://localhost:10005/type", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		mode: "cors",
		cache: "default"
	})
	.then(response =>{
		return response.json();
	})
	.then(type => {
		for(let r=0; r < type.length; r++) {
			ow_method.CreateLeaveData(type[r].name);
		}
	})
	.catch(error => {
		ow_sb_method.Show(error);
	})
);
 
