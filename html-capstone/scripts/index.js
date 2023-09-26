const dropDown = document.getElementById("dropdown-content").style;
const button = document.getElementById("dropdown-button");
let toggled = false;

function toggleDropdown() {
	if (toggled === false) {
		dropDown.display = "block";
		button.innerHTML = "&#9653;";
		toggled = true;
	} else {
		dropDown.display = "none";
		button.innerHTML = "&#9663;";
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
