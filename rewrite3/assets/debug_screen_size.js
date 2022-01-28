var newHTML = document.createElement ('div');
newHTML.innerHTML = "             \
    <div style='position:fixed;top:0px;right:0px;display:block;z-index:1000;height:2em;width:5em;'>             \
        <p id='screensize'>size</p>       \
    </div>                          \
";

document.body.appendChild (newHTML);
var x = setInterval(()=>{document.getElementById('screensize').innerHTML=window.innerWidth;},100);
