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

function select_table(x){
	
	if( x.classList[1] == "selected"){
		x.classList.remove('selected');
	}
	else{
		var y = document.getElementsByClassName("selected");
		for( var i = 0; i < y.length ; ++i){
			y[i].classList.remove('selected');
		}
		x.classList.add('selected');
	}
}

document.querySelector('select[name="time_reserv"]').onchange=function(event){
	var y = document.querySelector('select[name="time_reserv"]');
	var x = y.selectedOptions;

	var z = document.getElementsByClassName("selected_time"); //delete all class selected_time
	var len = z.length;
	for( var i = 0; i < len ; i++){
		z[i].classList.remove('selected_time');
	}

	for(var i=0; i<x.length;++i){ //set news 
		x[i].classList.add("selected_time");
	}
}