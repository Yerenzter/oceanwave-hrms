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

let mb = [mb1, mb2, mb3, mb4, mb5, mb6, mb7, mb8];
let mi = [mi1, mi2, mi3, mi4, mi5, mi6, mi7, mi8];
let mt = [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8];

const black = "#333";
const blue = "#0155b8";
const white = "#fff";
const outlined = "material-icons-outlined";
const round =  "material-icons-round";

function OnPage1() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb1 ? white : blue;
		r.style.borderRadius = r == mb1 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi1 ? round : outlined;
		y.style.color = y == mi1 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt1 ? black : white;	
	}
}

function OnPage2() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb2 ? white : blue;
		r.style.borderRadius = r == mb2 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi2 ? round : outlined;
		y.style.color = y == mi2 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt2 ? black : white;	
	}
}

function OnPage3() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb3 ? white : blue;
		r.style.borderRadius = r == mb3 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi3 ? round : outlined;
		y.style.color = y == mi3 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt3 ? black : white;	
	}
}

function OnPage4 () {
	for(var r of mb) {
		r.style.backgroundColor = r == mb4 ? white : blue;
		r.style.borderRadius = r == mb4 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi4 ? round : outlined;
		y.style.color = y == mi4 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt4 ? black : white;	
	}
}


function OnPage5() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb5 ? white : blue;
		r.style.borderRadius = r == mb5 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi5 ? round : outlined;
		y.style.color = y == mi5 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt5 ? black : white;	
	}
}

function OnPage6() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb6 ? white : blue;
		r.style.borderRadius = r == mb6 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi6 ? round : outlined;
		y.style.color = y == mi6 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt6 ? black : white;	
	}
}

function OnPage7() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb7 ? white : blue;
		r.style.borderRadius = r == mb7 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi7 ? round : outlined;
		y.style.color = y == mi7 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt7 ? black : white;	
	}
}

function OnPage8() {
	for(var r of mb) {
		r.style.backgroundColor = r == mb8 ? white : blue;
		r.style.borderRadius = r == mb8 ? "48px" : 0;
	}
	
	for(var y of mi) {
		y.className =  y == mi8 ? round : outlined;
		y.style.color = y == mi8 ? black : white;	
	}
	
	for(var n of mt) {
		n.style.color = n == mt8 ? black : white;	
	}
}
