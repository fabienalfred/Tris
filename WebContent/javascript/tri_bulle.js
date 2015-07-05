function generateTable(){
	"use strict"
	var tableLength = 9;
	var tab = fillTable(tableLength);
	displayTable(tab, tableLength);
}

function fillTable(tableLength){
	"use strict"
	var tab = [];
	for(var i=0 ; i<tableLength ; i++){
		tab[i] = Math.floor((Math.random()*10)+1);
	}
	 return tab;
}

function displayTable(tab, tableLength){
	"use strict"
	for(var i=0 ; i<tableLength ; i++){
		document.getElementById("idInitNum"+(i+1)).innerHTML = tab[i];
	}
}


window.onload = function(){
	document.getElementById("idGenerateTab").onclick = generateTable;
}