var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var ns=setInterval(navbarshrink,10);

function navbarshrink(){
	if (window.innerWidth<=1000 | window.innerHeight<=650){
		document.getElementById("navbarbg").style.display='none';
		document.getElementById("mininavswitch").style.display='block';
	}else{
		document.getElementById("navbarbg").style.display='block';
		document.getElementById("mininavswitch").style.display='none';
		document.getElementById("mininav").style.display='none';
	}
}
//separate func because I want to be able to add more shti later
function mininav(){
	document.getElementById("mininav").style.display='block';
	document.getElementById("mininavswitch").style.transform='scale(0,0)';
}
function mininavoff(){//current known bug: Scrolls to the top of the page on scale
	document.getElementById("mininav").style.display='none';
	document.getElementById("mininavswitch").style.transform='scale(1,1)';
}
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
}