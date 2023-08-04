import * as ow_account from "./dashboard.account.js";
import * as ow_method from "./dashboard.method.js";
import * as ow_var from "./dashboard.var.js";
import * as ow_screen from "../../core/system/screen.js"

function HideMenu() {
    ow_var.menu.style.width = "0vw";
    ow_var.menuModular.style.width = "100vw";

    ow_var.menu.style.transition = "width 0.2s";
    ow_var.menuModular.style.transition = "width 0.2s";

    setTimeout(() => {
        ow_var.menuBackdrop.style.visibility = "hidden";
    }, 200);
}

function ShowMenu() {
    ow_var.menu.style.width = "30vvw";
    ow_var.menuModular.style.width = "0";
    ow_var.menuBackdrop.style.visibility = "visible";
}

/* THE MENU SIDEBAR TRIGGER IF USER CLICKS
 * THE HAMBURGER ICON.
 */
ow_var.menuIcon.addEventListener("click", () => {
    ow_var.menuBackdrop.style.visibility = "visible";
    ow_var.menu.style.width = "70vw";
    ow_var.menuModular.style.width = "30vw";

    ow_var.menu.style.transiton = "width 0.3s";
    ow_var.menuModular.style.transition = "width 0.3s";
});


/* THE ACCOUNT DIALOG TRIGGER IF USER CLICKS
 * THE ACCOUNT ICON.
 */
ow_var.menuModular.addEventListener("click", () => {
    HideMenu();
});


/* A CODE THAT SHOW IF THE USER CLICKS THE EVERY MENU BUTTONS
 * THE EFFECT WILL CHANGE THE BACKGROUND COLOR
 * OTHERWISE WILL SET TO TRANSPARENT IF NOT NEEDED.
 */
for (let ry = 0; ry < ow_var.mb.length; ry++) {
    ow_var.mb[ry].addEventListener("click", () => {
        for (var r of ow_var.mb) {
            r.style.backgroundColor = r == ow_var.mb[ry] ? ow_var.white: ow_var.transparent;
        }

        for (var y of ow_var.mi) {
            y.style.color = y == ow_var.mi[ry] ? ow_var.black: ow_var.white;
            y.className = y == ow_var.mi[ry] ?ow_var.round: ow_var.outlined;
        }

        for (var n of ow_var.mv) {
            n.style.color = n == ow_var.mv[ry] ? ow_var.black: ow_var.white;
        }

        for (var m of ow_var.pg) {
            m.style.zIndex = m == ow_var.pg[ry] ? 1: 0;
        }
        
        setTimeout(() => {
            window.innerWidth < 768 ? HideMenu() : ShowMenu();
        }, 200);
    });
}

ow_var.accountIcon.addEventListener("click", () => {
    ow_var.accountIcon.style.backgroundColor = "#33333324";
    ow_var.accountIcon.style.color = ow_var.blue;
    ow_var.accountIcon.style.transition = "all 300ms";
    
    ow_method.ShowAccountMenu();
    
    setTimeout(() => {
        ow_var.accountIcon.style.backgroundColor = ow_var.transparent;
        ow_var.accountIcon.style.color = ow_var.black;
    }, 200);
});

for(let r=0; r < ow_var.AccountOptionBtn.length; r++) {
    ow_var.AccountOptionBtn[r].addEventListener("click", () => {
        ow_var.AccountMenuActions[r]();
        ow_method.HideAccountMenu();
    });
}

ow_var.logout.addEventListener("click", ow_account.Logout);

ow_var.accountSettingsBack.addEventListener("click", ow_method.HideAccountSettings);