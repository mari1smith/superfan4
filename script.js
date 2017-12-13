
function playSound1(elem){
	document.getElementById("late").play();
	document.getElementById("late2").pause();
}

function playSound2(elem){
	document.getElementById("late2").play();
	document.getElementById("late1").pause();
}

function changep(elem) {
document.getElementById("pink").classList.toggle("p");
}

function changen(elem) {
	document.getElementById("pink").classList.remove("p");
	document.getElementById("pink").classList.remove("n");
	document.getElementById("pink").classList.remove("k");
document.getElementById("pink").classList.toggle("g");
}

function changeg(elem) {
	document.getElementById("pink").classList.remove("g");
	document.getElementById("pink").classList.remove("p");
	document.getElementById("pink").classList.remove("k");
document.getElementById("pink").classList.toggle("n");
}

function changek(elem) {
	document.getElementById("pink").classList.remove("n");
	document.getElementById("pink").classList.remove("g");
	document.getElementById("pink").classList.remove("p");
document.getElementById("pink").classList.toggle("k");
}
