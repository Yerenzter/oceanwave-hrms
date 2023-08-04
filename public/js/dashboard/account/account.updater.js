import * as ow_method from "./account.method.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.js";

export function FetchAccountData() {
	fetch("http://localhost:10001/users", {
		method: "GET",
		headers: {
			"Content-Type": "appliation/json"
		},
		mode: "cors",
		cache: "default"
	})
	.then(response => {
		return response.json();
	})
	.then(user => {
		ow_method.CreateAccountData(user[user.length-1].id, 
			`${user[user.length-1].lastname}, ${user[user.length-1].firstname} ${user[user.length-1].middlename}`, 
			user[user.length-1].phonenumber,
			user[user.length-1].email,
			user[user.length-1].role
		);
		
		ow_method.ActivateAccountEdit(user.length-2);
		ow_method.ActivateAccountDelete(user.length-2);
	})
	.catch(error => {
		console.log(error);
	});
}

;(
fetch("http://localhost:10001/users", {
	method: "GET",
	headers: {
		"Content-Type": "application/json"
	},
	mode: "cors",
	cache: "default"
})
.then(response => {
	return response.json();
})
.then(users => {
	for(let r=1; r < users.length; r++) {
		ow_method.CreateAccountData(users[r].id,
		`${users[r].lastname}, ${users[r].firstname} ${users[r].middlename}`,
		users[r].phonenumber,
		users[r].email,
		users[r].role);
		
		ow_method.ActivateAccountEdit(r-1);
		ow_method.ActivateAccountDelete(r-1);
	}
})
.catch(error => {
	console.log(error);
})
);