/*
    SCREEN.JS
    BY YERENZTER

    – THIS SCRIPT ALLOWS TO DETECT THE DISPLAY SIZE
    THAT AUTOMATICALLY SET THE VALUE TO THE DISPLAY
    FROM THE WINDOW DIMENSIONS.
*/
var screenHeight = window.innerHeight || documentElement.clientHeight;
var screenWidth = window.innerWidth || documentElement.clientWidth;

function InitializeDisplay() {
    let screenHeight, screenWidth;
    screenHeight = window.innerHeight || documentElement.clientHeight;
    screenWidth = window.innerWidth || documentElement.clientWidth;
    
    document.body.style.height = `${screenHeight}px`;
    document.body.style.width = `${screenWidth}px`;
}

function MaintainScreenDisplay() {
    document.body.style.height = `${screenHeight}px`;
    document.body.style.width = `${screenWidth}px`;
}