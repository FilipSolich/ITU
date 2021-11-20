function showpage1(){
	document.getElementById("page_one").style.display = "block";
	document.getElementById("page_two").style.display = "none";
}


function showpage2(){
	document.getElementById("page_one").style.display = "none";
	document.getElementById("page_two").style.display = "block";
}

function my_alert(x){
	if(x.classList == "table mx-5" ){
		x.title = "stůl pro 4 osoby";
	}
	else if (x.classList == "big_table mt-4 mx-5"){
		x.title = "stůl pro 6 osob";
	}
	else if (x.classList == "rounded_table mt-4 mx-5"){
		x.title = "stůl pro 5 osob";
	}
	else if (x.classList == "stool mt-4"){
		x.title = "barová židle pro 1 osobu";
	}
	else if (x.classList == "stool"){
		x.title = "barová židle pro 1 osobu";
	}


}
function noalert(x){
	x.style.color = "black";
}
