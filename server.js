const express = require("express");
const app = express();
const port = 1024;

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`OceanWave HR Management app is started...`)
	console.log(`Server is running at http://127.0.0.1:${port}...`);
	console.log(` `);
	console.log(`Open your browser and enter the server address "127.0.0.1:1024"`);
});
