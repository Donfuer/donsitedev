//site by volker1
const nav = document.getElementById('nav');
const butt = document.getElementById('borg');
const breakPointVal = ['4px','21%','36%']; // add #borg breakpoint values from stylesheet
var ntg = 0 , i = 0;
navtoggle = () => {
    if (ntg == 0){
        nav.style.display='flex';
        if (window.innerWidth < 800){
            i = 2;
        }else {
            if (window.innerWidth < 1300){ //else if() wasn't working
                i = 1;
            }
            else{
                i = 0;
            }
        }
        butt.style.left = breakPointVal[i];
        ntg = 1;
    }
    else{
        nav.style.display='none';
        butt.style.left = "4px";
        ntg = 0;
    }

}
var dc = 0;
dragonClick = () => {
    if (dc == 0){
        document.createElement("<div style='display:block;position:fixed;left:0px;right:0px;top:0px;bottom:0px;z-index:100000;background:blue;'><button onclick='dragonClick()'>Close Popup</button><img src='assets/index/y.png' alt='very uwu'></div>");
        dc = 1;
    }else{
        document.getElementById('deleteme').style.display = 'none';
        dc = 0;
    }
}