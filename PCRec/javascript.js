function darkcheck() {
var check = document.getElementById("dark").checked;
	console.log(check);
	if (check == true) {
		document.body.className = "darkmode";
		document.getElementById("header").className = "darkmode";
		document.getElementById("centerdiv").className = "darkmodecenter";
} else {
	document.body.className = "";
	document.getElementById("header").className = "";
	document.getElementById("centerdiv").className = "center";
}
}