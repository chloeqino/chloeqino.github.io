

var navitems;
var desktop_navitems;
var navbar;
var navicon;
var targets;
var sections;
var sectionsid;
var spots = [];
var currentPosition;
var projects;
var inview;
var seem = false;
var des;
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
        setTimeout(function(){projects[i].classList.remove("hide");},i*400);
        
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
  if (currentPosition<(sections[1].offsetTop)){
      navbar.classList.add("enlarged");
     let progress = Math.ceil(currentPosition/sections[1].offsetTop*10)/10
      let opacity =Math.floor(currentPosition/sections[1].offsetTop*10)/10;
      let rbg = [84, 72, 85,1];
      let lightpink = [251, 250, 255,0.7];
      let new_rgba = rbg.map((e,i)=>{
          return lightpink[i]+((e-lightpink[i])*progress);
      });
      new_rgba = "rgba("+new_rgba[0]+","+new_rgba[1]+","+new_rgba[2]+","+new_rgba[3]+")";
      console.log(new_rgba);

Array.prototype.forEach.call(desktop_navitems, function(el,i) {
    // Do stuff hre
    console.log(i+el);
    if(i==0){
    el.setAttribute('style',"color:"+new_rgba+" !important");
    }else{
        el.style.color = new_rgba;
    }
});
      if(opacity<0.2){opacity=0};
      console.log("opacity"+opacity);
      navbar.style.backgroundColor="rgba(255,255,255,"+opacity+")";
  }else{
      navbar.classList.remove("enlarged");
      Array.prototype.forEach.call(desktop_navitems, function(el,i) {
        // Do stuff hre
        console.log(i+el);
        if(i==0){
        el.setAttribute('style',"rgba(84, 72, 85,1) !important");
        }else{
            el.style.color = 'rgba(84, 72, 85,1)';
        }
    });
  }
  let currentid =-1;
  navitems[0].classList.add("current");
  
  spots = getsectionsLocation();
      for(let i = spots.length-1;i>=0;i--){
          //console.log(spots[i]);
         if(currentPosition>=spots[i]){
             //console.log(spots[i]);
             //console.log(typeof(spots[i]));
             //console.log(sectionsid[i]);
             //console.log(targets);
             currentid = sectionsid[i];
             break;
         }
      }
      //console.log(currentid);
    if(currentid!=-1){
      for(let j=0;j<navitems.length;j++){
          //console.log(navitems[j].getAttribute("href"));
          navitems[j].classList.remove("current");
          if(navitems[j].getAttribute('href')==currentid){
           navitems[j].classList.add("current");
          }
      }
    }

}
function hideMobileMenu(){
    navicon.classList.remove("open");
    document.getElementById("mb-menu").classList.add("hide");
    document.getElementById("overlay").classList.remove("show");
}
function toggleMobileMenu(){
    navicon.classList.toggle("open");
    if(navicon.classList.contains("open")){
        document.getElementById("mb-menu").classList.remove("hide");
        document.getElementById("overlay").classList.add("show");
    }else{
        document.getElementById("mb-menu").classList.add("hide");
        document.getElementById("overlay").classList.remove("show");
    }
}
var lines = [];
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("demovideo").playbackRate = 1.75;

    des = document.getElementById("des");
    navbar = document.getElementById("main-nav");
    navicon = document.getElementById("nav-icon");
  
    navicon.addEventListener("click",toggleMobileMenu);
    var typewriter = new Typewriter(des, {
        loop: true
    });
    lines[0] = 'I have a passion for designing and building web experiences |';
    let n = lines[0].length-3;
    typewriter.pauseFor(1500).typeString("I have a passion for designing and building <strong><span class=\"highlight\">web experiences</span></strong>")
        .pauseFor(1500)
        .deleteChars(n).pauseFor(1000)
        .typeString("am an <strong class='highlight'>Informatics</strong> major at the University of California, Irvine")
        .pauseFor(1500)
        .deleteAll().pauseFor(1000)
        .typeString("Scroll down to learn more about me <strong class='highlight'>:)</strong>")
        .pauseFor(1500)
        .start();
    navitems = document.getElementsByClassName("nav-item");
    desktop_navitems =document.getElementsByClassName("desktop-nav-item");
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
     setTimeout(function(){hideMobileMenu()},200);
    if(window.scrollY<=sections[1].offsetTop&&(!isElementXPercentInViewport(projects[0],1))){
        seem = false;
        hideProjects();
    }
    inview = isElementXPercentInViewport(projects[0],30);
           if(inview && (!seem)){
               showProjects();
               seem = true;
           }
       
    });
    reponsiveNav();

  });