/*site by volker1*/
const ua = navigator.userAgent;
const ffn = document.getElementById("fireFoxFallBack");
const nav = document.getElementById("nav");
var r = 0, s = 0;
function cff(page){
  console.log(ua.indexOf("Firefox"));
  if (ua.indexOf("Firefox") != -1){
    document.getElementById("nb").classList += "nofirefox";
    document.getElementById("nbl").classList += "nofirefox";
    ffn.classList = "firefixed";
    ffn.style = "";
    const rawbg = document.getElementsByClassName("rawbg");
    for (i=0;i<rawbg.length;i++)[
      rawbg[i].style.background = "#0C0C0CCC"
    ]
    //document.body.addEventListener('resize', jsBreakpoints())
    var c = setInterval(jsBreakpoints,100);
    if (page == "lead"){
      document.getElementById('infoWindow').style.background = "#0C0C0CDD";
    }
  }
}
function fireFoxNav(){
  if (r == 0){
    nav.style.display = "flex";
    r = 1;
  }
  else if (r == 1){
    nav.style.display = "none";
    r = 0;
  }
}
function jsBreakpoints(){
  console.log("es")
  if (window.innerWidth > 1300 && window.innerHeight > 700){
    if (s == 0){
      ffn.style.display = "none";
      nav.style.display = "flex";
      s = 1;
      if (r == 1){
        r = 0;
      }
    }
  }
  else{
    if (s == 1){
      ffn.style.display = "grid";
      nav.style.display = "none";
      s = 0;
    }
  }
}