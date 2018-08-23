function dropDown() {
      	var y= document.getElementById('v');
      	var x= document.getElementById('version');
            var arrow=document.getElementById('downarrow');
            
       
      	// body...
      	if (x.style.display==="none") {
      		x.style.display="block";
      	}
      	else{
      		x.style.display="none";
      	}
      	if (x.style.display==="block") {
      		y.style.color="#8893c9";
                  arrow.style.color="#8893c9";
      	}
      	else if (x.style.display==="none"){
      		y.style.color="#767680";
                  arrow.style.color="#9A98AB";
      	}
      	
      }
 
     

	function hide(){
            var arrow=document.getElementById('downarrow');
      var x= document.getElementById('version');
      var y= document.getElementById('v');
      x.style.display="none";
     y.style.color="#767680";
     arrow.style.color="#9A98AB";

	}

 function displayMenu(e)
 {
     
     
      if(menu.style.display==="block")
      {
        menu.style.display="none";

        e.target.setAttribute("class","fa fa-bars");
        var x=e.target.getAttribute('class');
        console.log(x);

      }
      else{
            menu.style.display="block";
           
            e.target.setAttribute("class","fa fa-times");
         
      }
     
       
 }  

 function newA(jsonA)
 {
  var myLink = jsonA["myA"];
    //console.log(myLink[0].name);
for (var i = 0; i < myLink.length; i++) {
  var li = document.createElement('li');
  
  ul.appendChild(li);
  var a = document.createElement('a');
  a.href = myLink[i].url;
  a.textContent = myLink[i].name;
  a.target = "_blank";
  a.style.color = myLink[i].color;
  a.setAttribute('id',('link'+i));
  li.appendChild(a);

   a.onmouseover = function(e)
   {
    e = e || window.event;
    var linkID = e.target.getAttribute('id');
    //console.log(linkAttr);
    var index = linkID.slice(-1);
    e.target.style.backgroundColor = myLink[index].color;
    e.target.style.borderColor = myLink[index].color;
    e.target.style.color = "white";
   }
   a.onmouseout = function(e)
   {
    e = e || window.event;
    var linkID = e.target.getAttribute('id');
    //console.log(linkAttr);
    var index = linkID.slice(-1);
    e.target.style.backgroundColor = "#FCFDFF"; 
    e.target.style.color = myLink[index].color;
   }

}
 }

