const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

	var date = new Date();
	console.log(date);

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);


	let hrPosition = (hr*360/12)+(min*(360/60)/12);
	let minPosition = (min*360/60)+(sec*(360/60)/60);
	let secPosition = sec*360/60;

function runClock(){
	
	hrPosition = hrPosition + (3/360); // 360/12 = 30 then 30/3600seconds 
	minPosition = minPosition+(6/60); //(1/60)*6 = 6/60	
	secPosition = secPosition+6; //360degrees/60seconds = 6




	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runClock, 1000);