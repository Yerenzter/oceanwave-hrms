import * as ow_account from "./dashboard.account.js";
import * as ow_var from "./dashboard.var.js";
import * as loader from "../ui/loader/loader.method.js";
import * as ow_sb_method from "../ui/snackbar/snackbar.method.js";

;(
	fetch("http://localhost:10002/profile/0", {
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
	.then(profile => {
		ow_var.username.textContent = profile.username;
		ow_var.role.textContent = profile.role;
		
		ow_var.accountProfileName.textContent = profile.username;
		ow_var.accountProfileRole.textContent = profile.role;
		
		ow_var.aspLastname.textContent = profile.lastname;
		ow_var.aspFirstname.textContent = profile.firstname;
		ow_var.aspMiddlename.textContent = profile.middlename;
		ow_var.aspBirthday.textContent = profile.birthday;
		ow_var.aspExtension.textContent = profle.extension;
		ow_var.aspAge.textContent = profile.age;
		ow_var.aspGender.textContent = profile.gender;
		ow_var.aspCivilStatus.textContent = profile.civilstatus;
		ow_var.aspEmail.textContent = profile.email;
		ow_var.aspContactNumber.textContent = profile.contactnumber;
		ow_var.aspAddress.textContent = profile.address;
		ow_var.aspDateJoined.textContent = profile.datejoined;
		ow_var.aspDesignation.textContent = profile.designation;
		ow_var.aspDepartment.textContent = profile.department;
	})
	.catch(error => {
		ow_sb_method.Show(error);
	})
);

;(
	fetch("http://localhost:10006/auth/0", {
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
	.then(auth=> {
		if(auth.isUserLoggedIn == false) {
			setTimeout(() => {
				window.location.href = "http://localhost:1024/login.html";
			}, 3000);
		} else {
			loader.Hide();
		}
	})
	.catch(error => {
		ow_sb_method.Show(error);
	})
);