
 function myFunction(stopid){
 	var y= document.getElementById('myForm').elements[0].value;
 	var id=document.getElementById('id');
 	var x;
 	if (y==="ohlone2home") {
id.innerHTML=stopid;
     
     x = '51577';
 	}
 	else if (y==="jollibee2home") {

 		id.innerHTML=stopid;
 		x='52253';
 	}
 	else if (y==="home2ul") {

 		id.innerHTML=stopid;
 		x='58774';
 	}
 	else if (y==="home2ohlone"){
            id.innerHTML=stopid;
 		 		x='52633';
 	}
 	//create a link
 	var text=document.createTextNode(stopid);

     //id.appendChild(text);
 	var newA=document.createElement('a');
 	
 	var href=document.createAttribute('href');
 	var target=document.createAttribute('target');
 	target.value="_blank";
 	newA.setAttributeNode(target);
 	href.value="https://511.org/transitdepartures/"+x;
 	newA.setAttributeNode(href);
 	var linkname = document.createTextNode(x);
 	newA.appendChild(linkname);
id.appendChild(newA);

 }

 function newLink(x){
     var box = document.getElementById(x);
 	
 	var id=document.getElementById('id');
 	var select=document.getElementById('select');
 	var option = document.createElement('option');
 	select.appendChild(option);
 	var value=document.createAttribute('value');
 	value.value='home2ohlone';
 	option.setAttributeNode(value);
 	var newopt=document.createTextNode('Home To Ohlone College');
 	option.appendChild(newopt);
 	
 	
 	
 	
 }