//site by volker1
const nav = document.getElementById('nav');
var ntg = 0;
navtoggle = () => {
    if (ntg == 0){
        nav.style.display='flex';
        ntg = 1;
    }
    else{
        nav.style.display='none';
        ntg = 0;
    }

}