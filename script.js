
function playSound1(elem){
	document.getElementById("late").play();
	document.getElementById("late2").pause();
}

function playSound2(elem){
	document.getElementById("late2").play();
	document.getElementById("late1").pause();
}

function change2009(elem) {
document.getElementById("pink").classList.toggle("9");
}

function change2010(elem) {
	document.getElementById("pink").classList.remove("2009");
	document.getElementById("pink").classList.remove("2011");
	document.getElementById("pink").classList.remove("2012");
document.getElementById("pink").classList.toggle("2010");
}

function change2011(elem) {
	document.getElementById("pink").classList.remove("2010");
	document.getElementById("pink").classList.remove("2009");
	document.getElementById("pink").classList.remove("2012");
document.getElementById("pink").classList.toggle("2011");
}

function change2012(elem) {
	document.getElementById("pink").classList.remove("2010");
	document.getElementById("pink").classList.remove("2011");
	document.getElementById("pink").classList.remove("2009");
document.getElementById("pink").classList.toggle("2012");
}
