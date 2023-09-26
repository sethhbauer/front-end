const topButton = document.getElementById("top-button");
let onScreen = false;

function buttonEnter() {
	onScreen = true;
	let id = null;
	let pos = -100;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		} else {
			pos += 5;
			topButton.style.bottom = pos + "px";
		}
	}
}

function buttonExit() {
	onScreen = false;
	let id = null;
	let pos = 50;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame() {
		if (pos === -100) {
			clearInterval(id);
		} else {
			pos -= 5;
			topButton.style.bottom = pos + "px";
		}
	}
}

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		(onScreen && document.documentElement.scrollTop > 880) ||
		(!onScreen && !(document.documentElement.scrollTop > 880))
	) {
		return;
	} else if (
		onScreen &&
		!(
			document.documentElement.scrollTop > 880 ||
			document.documentElement.scrollTop === document.documentElement.scrollHeight
		)
	) {
		buttonExit();
	} else {
		buttonEnter();
	}
}

function topFunction() {
	document.documentElement.scrollTop = 0;
}
