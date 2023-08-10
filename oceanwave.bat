const { exec } = require("child_process");
const express = require("express");
const path = require("path");
const app = express();
const port = 1024;
const ports = [10000, 10001, 10002, 10003, 10004, 10005, 10006]
const databases = [
    "data/config/config.json",
    "data/user/user.json",
    "data/user/profile.json",
    "data/organization/organization.json",
    "data/attendance/attendance.json",
    "data/leave/leave.json",
    "data/authenticator/authenticator.json"
];

for (let r = 0; r < databases.length; r++) {
    exec(`json-server -p ${ports[r]} ${databases[r]}`, (err, stdout, stderr) => {
        if(err) {
            console.log(`Database server "http://localhost:${ports[r]}" is failed to run or successfully terminated its process.`);
        }
    });
}

console.log(``);
console.log("RESOURCE                               STATUS");
for (let r = 0; r < ports.length; r++) {
    let response = new Response(`http://localhost:${ports[r]}`);
    console.log(`http://localhost:${ports[r]}                   ${response.status}`);
}

exec("start msedge http://localhost:1024", (err, stdout, stderr) => {
    if(err) {
        exec("start chrome http://localhost:1024", (err, stdout, stderr) => {
            if(err) console.log(`
System is failed to run due to absence of Edge or Chrome broswer.
So open your favorite browser and enter this server address at "http://localhost:1024".
`);
        });
    }
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`
====================================================================================================
                                        WELCOME TO OCEAN WAVE
                                                v0.0.1

        A free and open-source HR management system powered by NodeJS, JSON-server and lowDB.
====================================================================================================

Name: Ocean Wave - HR System
Developer: Qubonic Arts & Software, AYCQ. (Yerenzter)
Address: Mabuyong Forest, Brgy. Magcalon, San Jose de Buenavista, Antique 5700, PH
Version: 0.0.1
Build state: In-beta
Model: Open-source
Price: Free
License: AYCQ.
Language used: HTML5, CSS3 & JavaScript
Database: AJAX (follows the CRUD standard)
Implementations: Material Icons, NodeJS, ExpressJS, JSON-server & lowDB


System server is now running at "http://localhost:${port}"...
        `);
});
