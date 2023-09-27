const dropDown = document.getElementById().style;
const button = document.getElementById();
let toggled = false;

const toggleDropdown = () => {
	if (toggled === false) {
		dropDown.display = "block";
		button.innerHTML = "";
		toggled = true;
	} else {
		dropDown.display = "none";
		button.innerHTML = "";
		toggled = false;
	}
};

const showDropdown = () => (dropDown.display = "block");

const hideDropdown = () => {
	if (toggled === true) {
		return;
	} else {
		dropDown.display = "none";
	}
};
