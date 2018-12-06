let sec=0;
let min=0;
let hr=0;
let displaySec=0;
let displayMin=0;
let displayHr=0;
let interval= null;
let status= "stopped";
function stopwatch(){
	sec++;
	if(sec/60 === 1){
		sec=0;
		min++;
		if(min/60 === 1){
			min=0;
			hr++;
		}
	}
	if(sec<10){
		displaySec="0" + sec.toString();
	}
	else {
		displaySec=sec;
	}
	if(min<10){
		displayMin="0" + min.toString();
	}
	else {
		displayMin=min;
	}
	if(hr<10){
		displayHr="0" + hr.toString();
	}
	else {
		displayHr=hr;
	}
	document.getElementById("display").innerHTML = displayHr + ":" + displayMin + ":" + displaySec;
}
function startstop(){
	if(status==="stopped"){
		interval=window.setInterval(stopwatch,1000);
		document.getElementById("startstop").innerHTML="Stop";
		status="started";
	}
	else{
		window.clearInterval(interval);
		document.getElementById("startstop").innerHTML="Start";
		status="stopped";
	}
}
function reset(){
	window.clearInterval(interval);
	sec=0;
	min=0;
	hr=0;
	document.getElementById("display").innerHTML="00:00:00";
	document.getElementById("startstop").innerHTML="Start";
}
// window.setInterval(stopwatch,1000);