
 function myFunction(){
 	var y= document.getElementById('myForm').elements[0].value;
 	var id=document.getElementById('id');
 	if (y==="ohlone2home") {

     id.innerHTML="Stop ID: 51577";
 	}
 	else if (y==="jollibee2home") {

 		id.innerHTML="Stop ID: 52253";
 	}
 	else if (y==="home2ul") {

 		id.innerHTML="Stop ID: 58774";
 	}
 }