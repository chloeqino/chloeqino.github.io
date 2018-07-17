
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
 	else if (y==="ws2ohlone"){
 		 id.innerHTML=stopid;
 		 		x='55277';
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
function myLink(e)
{
	var link="https://511.org/transitdepartures/";
	var idnum = formtwo['stopid'].value;
    var errtext=['stop id needs to be 5-digit number','please fill it out'];
	var err = document.getElementById('err');
	if (isNaN(idnum))
	 {
		e.preventDefault();
		err.innerHTML = errtext[0];

	 }
	else if(idnum===""||idnum===null)
     {
     	e.preventDefault();
     	err.innerHTML = errtext[1];
     }
    else if(idnum.length!==5)
    {
    	e.preventDefault();
    	err.innerHTML = errtext[0];
    }
	else
	{
	var url=link+idnum;
	e.target.action = url;
	console.log(idnum);
	err.innerHTML="";
    }
}

