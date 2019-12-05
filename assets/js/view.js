let material = document.getElementById("material");
let btn = document.getElementById("material-more");

btn.onclick = function(){

	if(material.className == "widen"){
		//shrink the box
		material.className = "";
		btn.innerHTML = "View More";
	} else{
		//expand the box
		material.className = "widen";
		btn.innerHTML = "View Less";
	}
};