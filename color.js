        function theDate() {
        	var d=new Date();
			document.getElementById('demo').innerHTML=d.toDateString();
		}
		function nextLine(){
			document.getElementById('welcome').innerHTML='welcome to my website';
			
		}
		if (new Date().getHours()>11 && new Date().getHours()<18) {
		document.getElementById('good').innerHTML="Good Afternoon,";
		document.getElementById('good').style.color='#ff8ba8';
		document.getElementById('day').style.color='#ff8ba8';


        }
	   else if (new Date().getHours()>=18 && new Date().getHours()<=20) {
	   	document.getElementById('good').innerHTML="Good Evening,";
	   	document.getElementById('good').style.color='#2c0c9f';
	   	 	document.getElementById('day').style.color='#2c0c9f';

	   }
	   else if (new Date().getHours()>20 || new Date().getHours()< 4) {
	   	 	document.getElementById('good').innerHTML="Good Night,";
	   	 		document.getElementById('good').style.color='#730ca3';
	   	 	document.getElementById('day').style.color='#730ca3';
	   	 	document.getElementById('wish').innerHTML='Sweet Dream';
	   	 	document.getElementById('wish').style.color='#ccadeb';

	   }

     var d= new Date();
     var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     var day=days[d.getDay()];
     
     document.getElementById('day').innerHTML=" Happy "+day; 
      
     //####choose the color#####
     function theBlue() {
     

     document.getElementById('qu').style.color='#88eeff';
     document.getElementById('img').src="blue.jpg";

      }
      function thePink(){
       
      
      document.getElementById('qu').style.color='#f856a8';
       document.getElementById('img').src="pink.jpg";
      
      }
      function thePurple(){
       
      
      document.getElementById('qu').style.color='#b073f4';
       document.getElementById('img').src="purple.jpg";
      
      }
      function theRed(){
       
    
      document.getElementById('qu').style.color='#DD295D';
       document.getElementById('img').src="red.jpg";
      
      }
      function theGreen(){
       
      
      document.getElementById('qu').style.color='#4DAE7F';
       document.getElementById('img').src="green.jpg";
      
      }
      function theOrange(){
      
      
     document.getElementById('qu').style.color='#ff8d17';
       document.getElementById('img').src="orange.jpg";
      
      }


      function heartColor() {
     var y=document.getElementById("choosenum").value;
         var btn = document.getElementById('change-color');
         if (y===""||y===null) {
           btn.setAttribute('disabled');
           btn.style.color='grey';
           btn.style.borderColor=btn.style.color;
         }

        var x=Math.floor(Math.random()*7)+1;
        var valid= document.getElementById('valid');
        var num_y = parseInt(y);
        var sum=x*num_y;
        var hearts ="";
        for (var i =x-1; i >= 0; i--) {
          hearts+="\u2665"+" ";
         }
        valid.innerHTML="You entered "+y+" , the random number is "+x+"<br>"+x+"*"+y+"="+sum+"<br>"+hearts;
        
        var heart=document.getElementById("heart");

        if(x==1 || y==1){
          heart.style.color="#FA9FB8";
         
        }
        else if (x==2 || y==2) {
          heart.style.color="#9FFAD7";
         
        }
        else if (x==3 || y==3) {
          heart.style.color="#FAC39F";
        
        }
        else if (x==4 || y==4) {
          heart.style.color="#CD9FFA";
         
        }
        else if (x==5 || y==5) {
          heart.style.color="#A6FAA6";
        }
        else if(x==6 || y==6){
          heart.style.color="#FAA6A6";
        }
        else if(x==7 || y==7){
          heart.style.color="#FAFAA6";
        }

         valid.style.color=heart.style.color;
         
       
      }
      function randomColor(){
        var num=Math.floor(Math.random()*360)+1;
        var hue=document.getElementById('hue');
        var huetwo=document.getElementById('hue2');
       var h2=document.getElementById('header');
      var bgcolor=document.getElementById('pastel_color');
       var a=document.getElementById('link');
       var num2=num+100;
       if(num2>360) 
        {
         num2=num-100;
       }
        huetwo.innerHTML=num2;
        var num3=Math.floor((num+num2)/2);
        console.log(num3);
        var hue2='hsl('+num2+',43%,95%)';
       hue.innerHTML=num;
       bgcolor.style.background='linear-gradient(130deg,hsl('+num+' ,43%, 95%),'+hue2+')';
       hue.style.backgroundColor= 'hsl('+num+',43%,95%)'; 
       huetwo.style.backgroundColor=hue2;    
       bgcolor.style.borderColor=bgcolor.style.backgroundColor;
       bgcolor.style.borderStyle='solid';
       h2.style.color='hsl('+num3+' ,30%, 60%)';
       a.style.color= h2.style.color;
       a.style.textDecorationColor= a.style.color;

    }





function checkIt(obj){
  var a=obj.value;
var c=document.getElementById('checking');
var c2=document.getElementById('checking-2');
var check=["You chose the wrong answer","Correct XD"];
var one=document.getElementById('an-1');
var two=document.getElementById('an-2');
//c.innerHTML=a;
c.style.color="white";
if (a==="wrong") {
c.style.backgroundColor="#F66D6D";
c.innerHTML=check[0];
one.style.backgroundColor="#F66D6D";

}
else if (a==="correct") {
 c.style.backgroundColor="#6DF697"; 
 c.innerHTML=check[1];
 one.style.backgroundColor="#6DF697";
}
else if (a==="wrong-2") {
c2.style.backgroundColor="#F66D6D";
c2.innerHTML=check[0];

}
else if (a==="correct-2") {
  c2.style.backgroundColor="#6DF697"; 
 c2.innerHTML=check[1];
}
two.style.backgroundColor=c2.style.backgroundColor;
}

function colorStar(sl) {
  var star=document.getElementById('star');
  var h=50;
  
  setInterval(fancystar,95);
  function fancystar()
  {
   
   h+=2;
   
    star.style.color="hsl("+h+sl;

  }
}
function accountInfo(){
  var y=document.getElementById('new_code');
var x=document.getElementById('string');
var string="<font color='aqua'>blue</font>";
x.innerHTML=string;
var newX=string.replace("<","&lt;");

y.innerHTML=newX;
var box=document.getElementById('practice_canvas');
var font=document.createElement('font');
font.setAttribute('color','#C2B4DC');
font.setAttribute('face','times');
var i=document.createElement('i');
font.textContent="Lavander Paris";
i.appendChild(font);
box.appendChild(i);
box.removeChild(y);
var myDog ={
  name: "Yuki",
  color: "white",
  age: 5
}
console.log(myDog.color);

}
function padZeros(x,y){
  var numOne = x.toString();
  
  var strLength = numOne.length;
  console.log(strLength);
  var numZeros = y - strLength;
  console.log(numZeros);
  for (var i = 0; i < numZeros; i++) {
    numOne ="0"+ numOne;
  }
  return numOne;
}
 function myMap(){
  var m = document.getElementById('map');
  var flowers = new Map();
  flowers.set('sakura', 'pink');
  flowers.set('iris','purple');
  for (var [key, value] of flowers){
  console.log(key + " is " + value);
  }
  m.innerHTML=flowers.size;
}
