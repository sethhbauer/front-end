const dropDown = document.getElementById().style;
const button = document.getElementById();
let toggled = false;

function toggleDropdown() {
	if (toggled === false) {
		dropDown.display = "block";
		button.innerHTML = "";
		toggled = true;
	} else {
		dropDown.display = "none";
		button.innerHTML = "";
		toggled = false;
	}
}

function showDropdown() {
	dropDown.display = "block";
}

function hideDropdown() {
	if (toggled === true) {
		return;
	} else {
		dropDown.display = "none";
	}
}
