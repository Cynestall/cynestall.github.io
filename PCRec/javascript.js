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

var menuClicked = 0;

function menuClick() {
	console.log("clicked1");
	if (menuClicked == 0) {
	menuClicked++;
	console.log("clicked");
	document.getElementById("menu").style.display = "block";
	document.getElementById("menu").style.right = "-300px";
	document.getElementById("content").style.right = "300px";
	document.body.style.overflow = "hidden";
} else if (menuClicked == 1) {

	menuClicked = 0;
	document.getElementById("menu").style.display = "none";
	document.getElementById("content").style.right = "0px";
	document.body.style.overflow = "visible";
}
}