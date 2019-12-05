let content = document.getElementById("content");
let button = document.getElementById("view-more");

button.onclick = function() {

	if(content.className == "open"){
		//shrink the box
		content.className = "";
		button.innerHTML = "View More";
	} else{
		//expand the box
		content.className = "open";
		button.innerHTML = "View Less";
	}
};