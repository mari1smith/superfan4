
function playSound1(elem){
	document.getElementById("late").play();
	document.getElementById("late2").pause();
}

function playSound2(elem){
	document.getElementById("late2").play();
	document.getElementById("late1").pause();
}

function changep(elem) {
document.getElementById("pink").classList.toggle("2009");
}

function changen(elem) {
	document.getElementById("pink").classList.remove("2009");
	document.getElementById("pink").classList.remove("2011");
	document.getElementById("pink").classList.remove("2012");
document.getElementById("pink").classList.toggle("2010");
}

function changeg(elem) {
	document.getElementById("pink").classList.remove("2010");
	document.getElementById("pink").classList.remove("2009");
	document.getElementById("pink").classList.remove("2012");
document.getElementById("pink").classList.toggle("2011");
}

function changek(elem) {
	document.getElementById("pink").classList.remove("2010");
	document.getElementById("pink").classList.remove("2011");
	document.getElementById("pink").classList.remove("2009");
document.getElementById("pink").classList.toggle("2012");
}
