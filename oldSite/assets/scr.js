<<<<<<< HEAD:oldSite/assets/scr.js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var resized=0;
var ns=setInterval(navbarshrink,100);
function navbarshrink(){
	if (window.innerWidth<=1000 | window.innerHeight<=650){
		document.getElementById("navbarbg").style.display='none';
		document.getElementById("mininavswitch").style.display='block';
		
		resize=1;
	}else{
		document.getElementById("navbarbg").style.display='block';
		document.getElementById("mininavswitch").style.display='none';
		document.getElementById("mininav").style.display='none';
		resized=0;
	}
}

function menuclicked(){
	//idfk how mininav is defined already, it's literal black magic
  if (mininav.style.display=='block'){
    mininav.style.display='none';
  }else{
    mininav.style.display='block';
}}
var head=document.getElementById("head");
var headstyle1="display:flex;justify-content:center;align-items:center;height:70px;color:white;background-color:var(--transhigh);backdrop-filter:blur(10px);font-family:'Ubuntu',sans-serif;max-width:800px;min-width:200px;border-radius:var(--rad);margin:auto;margin-top:10px;z-index:8;";
var headstyle2="position:fixed;top:0px;left:0px;right:0px;display:flex;justify-content:center;align-items:center;height:70px;color:white;background-color:var(--transhigh);backdrop-filter:blur(10px);font-family:'Ubuntu',sans-serif;z-index:8;";
/*
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("headscr").style.display='block';
	document.getElementById("head").style.display='none';
	document.getElementById("headpush").style.display='block';
  } else {
    document.getElementById("headscr").style.display='none';
	document.getElementById("head").style.display='block';
	document.getElementById("headpush").style.display='none';
  }
}*/
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
	
	head.style=headstyle2;
  } else {
	head.style=headstyle1;
  }
}
=======
//site by volker1
>>>>>>> 20f1ad40a6a79be6799d376eb7f02c0d8402620f:assets/scr.js
