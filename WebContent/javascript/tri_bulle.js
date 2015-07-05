var tableLength = 9;
var tab1 = [];
var tab2 = [];


function generateTable(){
	"use strict"
	tab1 = fillTable(tableLength);
	displayTable(tab1, "idInitNum");
}

function fillTable(){
	"use strict"
	var tab1 = [];
	for(var i=0 ; i<tableLength ; i++){
		tab1[i] = Math.floor((Math.random()*10)+1);
	}
	 return tab1;
}

function displayTable(tab, idNum){
	"use strict"
	for(var i=0 ; i<tableLength ; i++){
		document.getElementById(idNum+(i+1)).innerHTML = tab[i];
	}
}

function sortTable(){
	"use strict"
	var pointer;
	for(var k=0 ; k<tableLength-1 ; k++){
		pointer = 0;
		while(pointer<=(tableLength-k)){
			if(tab1[pointer]>tab1[pointer+1])
				inverse(pointer);
			pointer++;
		}
	}
	displayTable(tab2, "idSortedNum");
}

function inverse(pointer){
	"use strict"
	for(var i=0 ; i<tableLength ; i++){
		if(i==pointer)
			tab2[i] = tab1[pointer+1];
		else if(i==pointer+1)
			tab2[i] = tab1[pointer];
		else
			tab2[i] = tab1[i];
	}
	for(var i=0 ; i<tableLength ; i++){
		tab1[i] = tab2[i];
	}
}

window.onload = function(){
	document.getElementById("idGenerateTab").onclick = generateTable;
	document.getElementById("idSortTab").onclick = sortTable;
}