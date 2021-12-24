var navitems;
var navbar;
var targets;
var sections;
var sectionsid;
var spots = [];
var currentPosition;

function getsectionsLocation(){

    return Array.from(sections).map((e)=>{
        let o = {};
        o[e.offsetTop] = e.id;
         //spots.push(e.offsetTop);
        return e.offsetTop;
    });
}
function reponsiveNav(){
  currentPosition = window.scrollY;
  let currentid =-1;
  navitems[0].classList.add("current");
  
  spots = getsectionsLocation();
      for(let i = spots.length-1;i>=0;i--){
          console.log(spots[i]);
         if(currentPosition>=spots[i]){
             console.log(spots[i]);
             console.log(typeof(spots[i]));
             console.log(sectionsid[i]);
             console.log(targets);
             currentid = sectionsid[i];
             break;
         }
      }
      console.log(currentid);
    if(currentid!=-1){
      for(let j=0;j<navitems.length;j++){
          console.log(navitems[j].getAttribute("href"));
          navitems[j].classList.remove("current");
          if(navitems[j].getAttribute('href')==currentid){
           navitems[j].classList.add("current");
          }
      }
    }

}
document.addEventListener("DOMContentLoaded", function(event) { 
    navitems = document.getElementsByClassName("nav-item");
    sections = document.getElementsByTagName("section");
    targets = Array.from(navitems).map(function(e){
        let hrefvalue = String(e.getAttribute('href'));
        let o = {};
        o[hrefvalue]=e;
        return o;
    });
    sectionsid = Array.from(sections).map((e)=>{
        let o = {};
        o[e.offsetTop] = e.id;
         spots.push(e.offsetTop);
        return "#"+e.id;
    });
    console.log(targets);
    console.log(navitems);
    console.log(sectionsid,spots);
    document.addEventListener('scroll', function(e) {
       reponsiveNav();
    });
    reponsiveNav();

  });