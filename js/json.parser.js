let init = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"	
	},
	mode: "cors",
	cache: "default"
};

let json = new Request("/data/admin/admin.json", init);

fetch(json).then((resp) => {
	return resp.json();	
}).then((admin) => {
	console.log(admin.username);	
});
