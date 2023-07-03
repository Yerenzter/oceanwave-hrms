function IsFirsTimeUser() {
	fetch("data/config/config.json", {
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
	.then((status) => {
		console.log(`First time user? ${status.isFirstTimeUser}`);	
	})
	.catch((error) => {
		console.log(error);	
	});	
}
