let screenX = window.innerWidth || documentElement.clientWidth;
let screenY = window.innerHeight || documentElement.clientHeight;

function InitializeDisplay() {
    document.body.style.margin = "0 auto";
    document.body.style.padding = 0;
    document.body.style.width = `100vw`;
    document.body.style.height = `100vh`;
    document.body.style.userSelect = "none";
}

function ResizeDisplay() {
    let screenX = window.innerWidth || documentElement.clientWidth;
    let screenY = window.innerHeight || documentElement.clientHeight;
    
    document.body.width = `${screenX}px`;
    document.body.height = `${screenY}px`;
}