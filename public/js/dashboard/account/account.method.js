import * as ow_var from "./account.var.js";
import * as ow_sb_method from "../../ui/snackbar/snackbar.js";

export function UpdateAccountData(id, accountPhoneNumber, accountEmail) {
	fetch(`http://localhost:10001/users/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email: accountEmail,
			phonenumber: accountPhoneNumber
		})
	})
	.then(error => {
		console.log(error);
	})
	.catch(error => {
		console.log(error);
	});
}

export function DeleteAccountData(id, position) {
    fetch(`http://localhost:10001/users/${id}`, {
        method: "DELETE"
    })
    .then(error => {
        console.log(error);
    })
    .catch(error => {
        console.log(error);
    });
}

export function CreateAccountData(accountId, 
accountName, 
accountPhoneNumber, 
accountEmail,
accountRole) {
	let tableRow = document.createElement("div");
	let tableRowId = document.createElement("div");
	let tableRowProfile = document.createElement("div");
	let tableRowAction = document.createElement("div");
	let tableDataId = document.createElement("span");
	let tableDataName = document.createElement("span");
	let tableDataPhoneNumber = document.createElement("span");
	let tableDataEmail = document.createElement("span");
	let tableDataRole = document.createElement("span");
	let actionEdit = document.createElement("span");
	let actionDelete = document.createElement("span");
	let actionMore = document.createElement("span");
	
	tableRow.className = "ow-account-table-row";
	tableRowId.className = "ow-table-row-id";
	tableRowProfile.className = "ow-table-row-profile";
	tableRowAction.className = "ow-table-row-action";
	tableDataId.className = "ow-table-data";
	tableDataName.className = "ow-table-data ow-table-name";
	tableDataPhoneNumber.className = "ow-table-data ow-table-phonenumber";
	tableDataEmail.className = "ow-table-data ow-table-email";
	tableDataRole.className = "ow-table-data ow-table-row";
	actionEdit.className  = `${ow_var.outlined} ow-account-edit`;
	actionDelete.className = `${ow_var.outlined} ow-account-delete`;
	actionMore.className = `${ow_var.outlined} ow-account-more`;
	
	tableDataId.textContent = accountId;
	tableDataName.textContent = accountName;
	tableDataPhoneNumber.textContent = accountPhoneNumber;
	tableDataEmail.textContent = accountEmail;
	tableDataRole.textContent = accountRole;
	actionEdit.textContent = "edit";
	actionDelete.textContent = "delete";
	actionMore.textContent = "more_vert";
	
	tableRowId.appendChild(tableDataId);
	tableRowProfile.appendChild(tableDataName);
	tableRowProfile.appendChild(tableDataPhoneNumber);
	tableRowProfile.appendChild(tableDataEmail);
	tableRowProfile.appendChild(tableDataRole);
	tableRowAction.appendChild(actionEdit);
	tableRowAction.appendChild(actionDelete);
	tableRowAction.appendChild(actionMore);
	tableRow.appendChild(tableRowId);
	tableRow.appendChild(tableRowProfile);
	tableRow.appendChild(tableRowAction);
	ow_var.accountTable.appendChild(tableRow);
}

export function ActivateAccountEdit(position) {
	let AccountEdit = document.querySelectorAll(".ow-account-edit");
	
	AccountEdit[position].addEventListener("click", () => {
		TriggerAccountEdit(position);
	});
}

export function ActivateAccountDelete(position) {
	let accountTable = document.querySelector("#ow-account-table");
	let AccountTableRow = document.querySelectorAll(".ow-account-table-row");
	let TableRowId = document.querySelectorAll(".ow-table-row-id");
	let AccountDelete = document.querySelectorAll(".ow-account-delete");
	
	AccountDelete[position].addEventListener("click", () => {
		DeleteAccountData(TableRowId[position].textContent, position);
		accountTable.removeChild(AccountTableRow[position]);
	});
}

export function TriggerAccountEdit(position) {
	let TableRowId =  document.querySelectorAll(".ow-table-row-id");
	let TableName = document.querySelectorAll(".ow-table-name");
	let TablePhoneNumber = document.querySelectorAll(".ow-table-phonenumber");
	let TableEmail = document.querySelectorAll(".ow-table-email");
	let TableRole = document.querySelectorAll(".ow-table-role");
	let AccountEdit = document.querySelectorAll(".ow-account-edit");
	
	TableName[position].contentEditable = false;
	TablePhoneNumber[position].contentEditable = true;
	TableEmail[position].contentEditable = true;
	
	TableName[position].style.backgroundColor = ow_var.transparent;
	TablePhoneNumber[position].style.backgroundColor = "#33333324";
	TableEmail[position].style.backgroundColor = "#33333324";
	
	AccountEdit[position].textContent = "check";
	
	AccountEdit[position].addEventListener("click", () => {
		UpdateAccountData(TableRowId[position].textContent, 
			TablePhoneNumber[position].textContent, 
			TableEmail[position].textContent
		);
		DoneAccountEdit(position);
	});
}

export function DoneAccountEdit(position) {
	let TableName = document.querySelectorAll(".ow-table-name");
	let TablePhoneNumber = document.querySelectorAll(".ow-table-phonenumber");
	let TableEmail = document.querySelectorAll(".ow-table-email");
	let TableRole = document.querySelectorAll(".ow-table-role");
	let AccountEdit = document.querySelectorAll(".ow-account-edit");
	
	TableName[position].contentEditable = false;
	TablePhoneNumber[position].contentEditable = false;
	TableEmail[position].contentEditable = false;
	
	TableName[position].style.backgroundColor = ow_var.transparent;
	TablePhoneNumber[position].style.backgroundColor = ow_var.transparent;
	TableEmail[position].style.backgroundColor = ow_var.transparent;
	
	AccountEdit[position].textContent = "edit";
	
	AccountEdit[position].addEventListener("click", () => {
		TriggerAccountEdit(position);
	});
}