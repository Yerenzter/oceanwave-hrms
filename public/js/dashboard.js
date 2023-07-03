let m1 = document.querySelector("#m1");
let m2 = document.querySelector("#m2");
let m3 = document.querySelector("#m3");
let m4 = document.querySelector("#m4");

let mb1 = document.querySelector("#mb1");
let mb2 = document.querySelector("#mb2");
let mb3 = document.querySelector("#mb3");
let mb4 = document.querySelector("#mb4");
let mb5 = document.querySelector("#mb5");
let mb6 = document.querySelector("#mb6");
let mb7 = document.querySelector("#mb7");
let mb8 = document.querySelector("#mb8");

let mi1 = document.querySelector("#mi1");
let mi2 = document.querySelector("#mi2");
let mi3 = document.querySelector("#mi3");
let mi4 = document.querySelector("#mi4");
let mi5 = document.querySelector("#mi5");
let mi6 = document.querySelector("#mi6");
let mi7 = document.querySelector("#mi7");
let mi8 = document.querySelector("#mi8");

let mt1 = document.querySelector("#mt1");
let mt2 = document.querySelector("#mt2");
let mt3 = document.querySelector("#mt3");
let mt4 = document.querySelector("#mt4");
let mt5 = document.querySelector("#mt5");
let mt6 = document.querySelector("#mt6");
let mt7 = document.querySelector("#mt7");
let mt8 = document.querySelector("#mt8");

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");
let p6 = document.querySelector("#p6");
let p7 = document.querySelector("#p7");
let p8 = document.querySelector("#p8");

let modal = document.querySelector("#modal-root");
let modalHeaderLabel = document.querySelector("#modal-header-label");
let modalActionOk = document.querySelector("#modal-action-ok");
let modalDlg = document.querySelector(".modal");
let modalClrBtn = document.querySelectorAll(".modal-clear-btn");
let modalIcon = document.querySelectorAll(".modal-icon");
let modalInputText = document.querySelectorAll(".modal-input-text");
let modalLabelText = document.querySelectorAll(".modal-label-text");

let email = document.querySelector("#mi-email");
let firstName = document.querySelector("#mi-firstname");
let middleName = document.querySelector("#mi-middlename");
let lastName = document.querySelector("#mi-lastname");
let phoneNumber = document.querySelector("#mi-phone-number");
let assignedPosition = document.querySelector("#mi-position");

let mb = [mb1, mb2, mb3, mb4, mb5, mb6, mb7, mb8];
let mi = [mi1, mi2, mi3, mi4, mi5, mi6, mi7, mi8];
let mp = [m1, m2, m3, m4];
let mt = [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8];
let pg = [p1, p2, p3, p4, p5, p6, p7, p8];

const black = "#333";
const blue = "#0155b8";
const gray = "#33333348";
const white = "#fff";
const outlined = "material-icons-outlined";
const round = "material-icons-round";

let tableSheet = document.querySelector("#table-sheet");
let tableData = document.querySelectorAll(".table-data");
let removeBtn = document.querySelectorAll(".remove-btn");

function OnPage1() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb1 ? white : blue;
        r.style.borderRadius = r == mb1 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi1 ? round : outlined;
        y.style.color = y == mi1 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt1 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p1 ? 1 : 0;
        m.style.opacity = m == p1 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage2() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb2 ? white : blue;
        r.style.borderRadius = r == mb2 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi2 ? round : outlined;
        y.style.color = y == mi2 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt2 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p2 ? 1 : 0;
        m.style.opacity = m == p2 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage3() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb3 ? white : blue;
        r.style.borderRadius = r == mb3 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi3 ? round : outlined;
        y.style.color = y == mi3 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt3 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p3 ? 1 : 0;
        m.style.opacity = m == p3 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage4() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb4 ? white : blue;
        r.style.borderRadius = r == mb4 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi4 ? round : outlined;
        y.style.color = y == mi4 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt4 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p4 ? 1 : 0;
        m.style.opacity = m == p4 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage5() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb5 ? white : blue;
        r.style.borderRadius = r == mb5 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi5 ? round : outlined;
        y.style.color = y == mi5 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt5 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p5 ? 1 : 0;
        m.style.opacity = m == p5 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage6() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb6 ? white : blue;
        r.style.borderRadius = r == mb6 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi6 ? round : outlined;
        y.style.color = y == mi6 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt6 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p6 ? 1 : 0;
        m.style.opacity = m == p6 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage7() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb7 ? white : blue;
        r.style.borderRadius = r == mb7 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi7 ? round : outlined;
        y.style.color = y == mi7 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt7 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p7 ? 1 : 0;
        m.style.opacity = m == p7 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnPage8() {
    for (var r of mb) {
        r.style.backgroundColor = r == mb8 ? white : blue;
        r.style.borderRadius = r == mb8 ? "48px" : 0;
    }

    for (var y of mi) {
        y.className = y == mi8 ? round : outlined;
        y.style.color = y == mi8 ? black : white;
    }

    for (var n of mt) {
        n.style.color = n == mt8 ? black : white;
    }

    for (var m of pg) {
        m.style.zIndex = m == p8 ? 1 : 0;
        m.style.opacity = m == p8 ? 1 : 0;
        m.style.transition = "opacity 0.2s";
    }
}

function OnShowAddModal() {
    modal.style.visibility = "visible";

    modalDlg.style.opacity = 1;
    modalDlg.style.transition = "opacity 0.3s";

    ClearAddEmployeeForms();
    ResetAddEmployeeLabels("all");
    DisableConfirmButton();
}

function OnHideAddModal() {
	modalDlg.style.opacity = 0;
    modalDlg.style.transition = "opacity 0.2s";
    
    setTimeout(() => {
        modal.style.visibility = "hidden";
    }, 200);
	
	HideClearButton();		
}

function Cancel() {
    modalDlg.style.opacity = 0;
    modalDlg.style.transition = "opacity 0.2s";
    
    modalHeaderLabel.textContent = "Add employee"

    ClearAddEmployeeForms();
    ResetAddEmployeeLabels();
    DisableConfirmButton();
    HideClearButton();

    setTimeout(() => {
        modal.style.visibility = "hidden";
    }, 200);
}

function Confirm() {
    OnHideAddModal();
    AddEmployee();
    
    ClearAllTableData();
    
    setTimeout(() => {
		GetEmployeeList();
        modal.style.visibility = "hidden";
    }, 200);
}

function AddEmployee() {
	let tableData = document.querySelectorAll(".table-data");
	let idCount = tableData.length;
    let employeeLastName = lastName.value;
    let employeeFirstName= firstName.value;
    let employeeMiddleName = middleName.value;
    let employeeEmail = email.value;

    CreateEmployeeList(idCount+1, employeeLastName, employeeFirstName, employeeMiddleName, employeeEmail);

    let employee = {
        id: idCount + 1,
        lastname: employeeLastName,
        firstname: employeeFirstName,
        middlename: employeeMiddleName,
        email: email.value,
        number: phoneNumber.value,
        occupation: assignedPosition.value,
    };

    fetch("http://localhost:24/employee", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    })
        .then((error) => {
            console.log(
                error ? "STATUS_CODE::403" : "JSON is posted successfully."
            );
        })
        .catch((error) => {
            console.log(error);
        });
}

function OnAddEmployee() {
	OnShowAddModal();
	modalDlg.oninput = () => ValidateForm("add");
}

function UpdateEmployee(id) {
	let employee = {
		id: id,
		lastname: lastName.value,
		firstname: firstName.value,
		middlename: middleName.value,
		email: email.value,
		number: phoneNumber.value,
		occupation: assignedPosition.value
	}
	
	ClearAllTableData();
	
	setTimeout(() => {
		GetEmployeeList();	
	}, 500);
	
	fetch(`http://localhost:24/employee/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(employee)
	})
	.then((error) => {
		console.log(error ? "STATUS_CODE::403" : "JSON is patched successfully.");	
	})
	.catch((error) => {
		console.log(error);	
	});
}

function ClearAllTableData() {
	let tableSheet =  document.querySelector("#table-sheet");
	let tableData = document.querySelectorAll(".table-data");
	
	for(let r=0; r < tableData.length; r++) {
		tableSheet.removeChild(tableData[r]);	
	}	
}

function RemoveEmployee() {
    let tableSheet = document.querySelector("#table-sheet");
    let tableData = document.querySelectorAll(".table-data");
    let removeBtn = document.querySelectorAll(".remove-btn");

    for (let r = 0; r < removeBtn.length; r++) {
        removeBtn[r].onclick = () => {
            tableData[r].style.opacity = 0;
            tableData[r].style.transition = "opacity 0.2s";
            setTimeout(() => {
                tableSheet.removeChild(tableData[r]);
            }, 500);

            fetch("data/employee/employee.json", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                cache: "default",
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    fetch(`http://localhost:24/employee/${data.employee[r].id}`, {
                        method: "DELETE",
                    })
                        .then((error) => {
                            console.log(
                                error
                                    ? "STATUS_CODE::403"
                                    : "JSON is deleted successfully."
                            );
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
        };
    }
}

function EditEmployee() {
	fetch("data/employee/employee.json", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"	
		},
		mode: "cors",
		cache: "default"
	})
	.then((response) => {
		return response.json();	
	})
	.then((data) => {
		let tableSheet = document.querySelector("#table-sheet");
		let tableData = document.querySelectorAll(".table-data");
		let editBtn = document.querySelectorAll(".edit-btn");
		
		editBtn.className = round;
    
		for(let r=0; editBtn.length; r++) {
			editBtn[r].onclick = () => {
				OnShowAddModal();
				
				modalHeaderLabel.textContent = "Edit employee";
				lastName.value = data.employee[r].lastname;
				firstName.value = data.employee[r].firstname;
				middleName.value = data.employee[r].middlename;
				email.value = data.employee[r].email;
				phoneNumber.value = data.employee[r].number;
				assignedPosition.value = data.employee[r].occupation;
				
				ShowClear();
				ValidateForm();			
				modalDlg.oninput = () => ValidateForm("update", data.employee[r].id);
			};
		}
	})
	.catch((error) => {
		console.log(error);	
	});
}

function GetEmployeeList() {
    fetch("data/employee/employee.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let r = 0; r < data.employee.length; r++) {
                CreateEmployeeList(
                    data.employee[r].id,
                    data.employee[r].lastname,
                    data.employee[r].firstname,
                    data.employee[r].middlename,
                    data.employee[r].email
                );
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function CreateEmployeeList(employee_id, employee_lastname, employee_firstname, employee_middlename, employee_email) {
    let tableSheet = document.querySelector("#table-sheet");
    let tableData = document.createElement("div");
    let td1 = document.createElement("span");
    let td2 = document.createElement("span");
    let td3 = document.createElement("span");
    let td4 = document.createElement("span");
    let td5 = document.createElement("span");
    let edit = document.createElement("span");
    let remove = document.createElement("span");

    tableData.style.opacity = 1;
    tableData.style.transition = "opacity 0.2s";

    tableData.className = "table-data";
    td1.className = "td";
    td2.className = "td";
    td3.className = "td";
    td4.className = "td";
    td5.className = "td";
    edit.className = `${outlined} edit-btn`;
    remove.className = `${outlined} remove-btn`;

    edit.onclick = EditEmployee;
    remove.onclick = RemoveEmployee;

    td1.textContent = employee_id;
    td2.textContent = `${employee_lastname} ${employee_firstname} ${employee_middlename}`;
    td3.textContent = employee_email;
    td4.textContent = "New";
    edit.textContent = "edit";
    remove.textContent = "delete";

    td5.appendChild(edit);
    td5.appendChild(remove);
    tableData.appendChild(td1);
    tableData.appendChild(td2);
    tableData.appendChild(td3);
    tableData.appendChild(td4);
    tableData.appendChild(td5);
    tableSheet.appendChild(tableData);

    EditEmployee();
    RemoveEmployee();
}

function ShowClear() {
    for (let r = 0; r < modalInputText.length; r++) {
        modalClrBtn[r].style.visibility =
            0 < modalInputText[r].value.length ? "visible" : "hidden";
    }
}

for (let r = 0; r < modalClrBtn.length; r++) {
    modalClrBtn[r].onclick = () => {
        modalInputText[r].value = "";
        modalClrBtn[r].style.visibility = "hidden";
        ResetAddEmployeeLabels(r-2);
        DisableConfirmButton();
    };
}

function ClearAddEmployeeForms() {
    for (let r = 0; r < modalInputText.length; r++) {
        modalInputText[r].value = "";
    }
}

function ResetAddEmployeeLabels(args) {
	if(args == "all") {
		for(let r=0; r < modalIcon.length; r++) {
			modalIcon[r].style.color = black;
			modalIcon[r].className = `${outlined} modal-icon`;
			modalLabelText[r].style.color = black;	
		}	
	} else {
		for(let r=0; r < modalIcon.length; r++) {
			if(r == args) {
				modalIcon[r].style.color = black;
				modalIcon[r].className = `${outlined} modal-icon`;
				modalLabelText[r].style.color = black;
				break;
			}
		}	
	}
}

function EnableConfirmButton(mode, id) {
    modalActionOk.style.backgroundColor = blue;
    modalActionOk.onclick = mode == "update" ? () => (UpdateEmployee(id), OnHideAddModal()) : mode == "add" ? Confirm : false;
}

function DisableConfirmButton() {
    modalActionOk.style.backgroundColor = gray;
    modalActionOk.onclick = false;
}

function HideClearButton() {
    for (let r = 0; r < modalClrBtn.length; r++) {
        modalClrBtn[r].style.visibility = "hidden";
    }
}

function ValidateForm(mode, id) {
    if (0 < modalInputText[0].value.length)
        if (0 < modalInputText[1].value.length)
            if (0 < modalInputText[2].value.length) {
                modalIcon[0].className = `${round} modal-icon`;
                modalIcon[0].style.color = blue;
                modalLabelText[0].style.color = blue;
            } else {
                modalIcon[0].className = `${outlined} modal-icon`;
                modalIcon[0].style.color = black;
                modalLabelText[0].style.color = black;
            }

    if (0 < modalInputText[3].value.length) {
        modalIcon[1].className = `${round} modal-icon`;
        modalIcon[1].style.color = blue;
        modalLabelText[1].style.color = blue;
    } else {
        modalIcon[1].className = `${outlined} modal-icon`;
        modalIcon[1].style.color = black;
        modalLabelText[1].style.color = black;
    }

    if (0 < modalInputText[4].value.length) {
        modalIcon[2].className = `${round} modal-icon`;
        modalIcon[2].style.color = blue;
        modalLabelText[2].style.color = blue;
    } else {
        modalIcon[2].className = `${outlined} modal-icon`;
        modalIcon[2].style.color = black;
        modalLabelText[2].style.color = black;
    }

    if (0 < modalInputText[5].value.length) {
        modalIcon[3].className = `${round} modal-icon`;
        modalIcon[3].style.color = blue;
        modalLabelText[3].style.color = blue;
    } else {
        modalIcon[3].className = `${outlined} modal-icon`;
        modalIcon[3].style.color = black;
        modalLabelText[3].style.color = black;
    }

    if (0 < modalInputText[0].value.length)
        if (0 < modalInputText[1].value.length)
            if (0 < modalInputText[2].value.length)
                if (0 < modalInputText[3].value.length)
                    if (0 < modalInputText[4].value.length)
                        if (0 < modalInputText[5].value.length) {
                            EnableConfirmButton(mode, id);
                        } else {
                            DisableConfirmButton();
                        }
}
