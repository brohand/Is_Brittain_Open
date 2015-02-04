function checkTime() {
	var today = new Date();
	var h = today.getHours();
	var d = today.getDay();

	if(d == 6) {
		return false;
	} else {
		if(d > 0 && d < 5) {
			return h > 7 && h < 20;
		}
		if(d == 0)
			return h > 16 && h < 20;
		if(d == 5)
			return h > 7 && h < 15;
	}
}

function isItOpen() {
	if(checkTime() == true) {
		document.getElementById('isItOpen').innerHTML = "YES";
	} else {
		document.getElementById('isItOpen').innerHTML = "NO";

	}
}