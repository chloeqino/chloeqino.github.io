var navitems;
var navbar;
var targets;
var sections;
var sectionsid;
var spots = [];
var currentPosition;
var projects;
var inview;
var seem = false;
function isElementXPercentInViewport(el, percentVisible) {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  }
function hideProjects(){
    for(let i = 0; i<projects.length;i++){
        projects[i].classList.add("hide");
        }
}

function showProjects(){
    for(let i = 0; i<projects.length;i++){
        projects[i].classList.remove("hide");
        
        }
}
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
    projects = document.getElementsByClassName("project");
    console.log(projects);
    seem = false;
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
    hideProjects();
    document.addEventListener('scroll', function(e) {
       reponsiveNav();
    
     
    inview = isElementXPercentInViewport(projects[0],30);
           if(inview && (!seem)){
               showProjects();
               seem = true;
           }
       
    });
    reponsiveNav();

  });