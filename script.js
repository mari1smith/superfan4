//The first function, playsound1 tells my code to get the id named "late" then play it sounds, and while it is playing for the other id named "late2" to stay pause and vice versa for the playsound2 function.
//The second function, change p,n,g,k tells my when the id is clicked that it will pop up in the empty-2 div, while the id is clicked the others will be removed.
//The toggle feature ensures that the images can be clicked back and forth.
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
document.getElementById("pink").classList.toggle("pngk");
	
}

function changen(elem) {
	document.getElementById("pink").classList.remove("p");
	document.getElementById("pink").classList.remove("n");
	document.getElementById("pink").classList.remove("k");
document.getElementById("pink").classList.toggle("g");
document.getElementById("pink").classList.toggle("pngk");
}

function changeg(elem) {
	document.getElementById("pink").classList.remove("g");
	document.getElementById("pink").classList.remove("p");
	document.getElementById("pink").classList.remove("k");
document.getElementById("pink").classList.toggle("n");
	document.getElementById("pink").classList.toggle("pngk");
}

function changek(elem) {
	document.getElementById("pink").classList.remove("n");
	document.getElementById("pink").classList.remove("g");
	document.getElementById("pink").classList.remove("p");
document.getElementById("pink").classList.toggle("k");
	document.getElementById("pink").classList.toggle("pngk");
}
