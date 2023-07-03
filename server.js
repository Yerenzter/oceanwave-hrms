const express = require("express");
const app = express();
const port = 1024;

const { exec } = require("child_process");
const databases = [
	"json-server -p 10 public/data/config/config.json",
	"json-server -p 24 public/data/employee/employee.json",
];

for(let r=0; r < databases.length; r++) {
	exec(databases[r], (err, stdout, stderr) => {
		if(err) {
			console.log("Database server is fail to run or successfully terminate its process.");
			return;
		}
		
		console.log("Running");
	});	
}

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`
Hi, Admin!

=========================================================================
                 WELCOME TO OCEANWAVE HR MANAGEMENT SYSTEM
                                  v0.0.1
                                  
 The robust, convenient & powerful HRM system that fits in your machine.
=========================================================================


Configuration DB server is now running at "http://localhost:10" and its process...
Employee management DB server is now running at "http://localhost:24" and its process...

DB RESOURCES:
http://localhost:10/config
http://localhost:10/config/1

http://localhost:24/employee
http://localhost:24/employee/1 and so on...

Main system is now running at "http://localhost:${port}"...

Now open your favorite browser and enter this address "https://localhost:${port}" to you addresss bar.
Press F11 key to make it fullscreen in your browser to improve experience.





Enjoy :).
`);
});

exec("start msedge http://localhost:1024", (err, stdout, stderr) => {
	if(err) {
		console.log(err);
		return;	
	}
	
	console.log(stdout);	
});
