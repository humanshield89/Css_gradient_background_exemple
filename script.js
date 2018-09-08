var color1 = document.getElementById("firstColor");
var color2 = document.getElementById("secondColor");
var body = document.getElementsByTagName("body")[0];
var current = document.getElementById("bg-proprety");
var directions = ["to left","to right","to top","to bottom","to bottom right","to bottom left","to top right","to top left"];
var tobtns = document.getElementsByClassName("tobtns");
for (i = 0 ; i < tobtns.length ; i++) {
	tobtns[i].addEventListener("click",tobtnsEvent);
}

function colorChanged(){
	body.style.backgroundImage = "linear-gradient(to right ,"+ rgbString(color1.value) +","+ rgbString(color2.value) +")";
	current.innerHTML = "linear-gradient(to right ,"+ rgbString(color1.value)  +","+ rgbString(color2.value) +")";
}

// code from overflow 
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function rgbString(hex) {
	col = hexToRgb(hex);
	return "rgb("+col.r+","+col.g+","+col.r+")"
}

function setrandomColors() {
	var lis = [];
	for (i = 0 ; i < 6 ; i++) {
		lis[i] = Math.floor(Math.random(250)*256);
	}
	
	body.style.backgroundImage = "linear-gradient(to right ,"+ "rgb("+lis[0]+","+lis[1]+","+lis[2]+")" +","+ "rgb("+lis[3]+","+lis[4]+","+lis[5]+")" +")";
	color1.value = rgbToHex(lis[0], lis[1], lis[2]);
	color2.value = rgbToHex(lis[3], lis[4], lis[5])
	current.innerHTML = "linear-gradient(to right ,"+ "rgb("+lis[0]+","+lis[1]+","+lis[2]+")" +","+ "rgb("+lis[3]+","+lis[4]+","+lis[5]+")" +")";
} 

function tobtnsEvent(event) {
	var element = event.toElement;
	for (i = 0 ; i < tobtns.length ; i++) {
		if (tobtns[i] === element){
			body.style.backgroundImage = "linear-gradient("+directions[i]+" ,"+ rgbString(color1.value) +","+ rgbString(color2.value) +")";
		}
	}
}