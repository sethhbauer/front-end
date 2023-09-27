const navBar = document.getElementById("nav-bar").style;

window.onscroll = () => changeTextColor();

const changeTextColor = () => {
	if (document.documentElement.scrollTop > 780 && document.documentElement.scrollTop < 2250) {
		navBar.color = "#777777";
	} else {
		navBar.color = "#dddddd";
	}
};
