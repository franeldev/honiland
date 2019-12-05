let source = document.getElementById("source");
let a = document.getElementById("display-more");

a.onclick = function(){

	if(source.className == "display"){
		//shrink the box
		source.className = "";
		a.innerHTML = "View More";
	} else{
		//expand the box
		source.className = "display";
		a.innerHTML = "View Less";
	}
};