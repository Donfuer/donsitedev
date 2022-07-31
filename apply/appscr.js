/*site by volker1*/
const frameArr = ["https://docs.google.com/forms/d/e/1FAIpQLSd6j8_tkTxyQ8u5NwR_S6G6GGWo5L2Z1gtr7BxXUl3CEtg2oQ/viewform?embedded=true",
"https://docs.google.com/forms/d/e/1FAIpQLSctbAXk7V1fLgSIhB9Di_oH_PQOlOEGC9cNt2VL7V55_36HDA/viewform?embedded=true",
"https://docs.google.com/forms/d/e/1FAIpQLSfj0F5rn6dvrEVnnZOP5qW898CTCRoZ9ZDSBtkAAp1-icx77w/viewform?embedded=true",
]
//T
const appFrame = document.getElementById('appframe')
const app = document.getElementById('app')
const bRow = document.getElementById("bRow")

var urla = window.location.href.toString()
urla = urla.slice((urla.lastIndexOf("#")+1),urla.length)
if (urla.length == 1){
  apply(urla)
}
function apply(b){
  alert("Hey! We moved the application process to our Public discord server! Join by clicking the discord link on the site!")
  /*
  app.src = frameArr[b]
  document.getElementById("appmenu").style.display = "none"
  document.getElementById("appwin").style.display = "block"
  appFrame.style.display = "block"
  app.style.display = "block"
  bRow.style.display = "flex"
  */
}
function topApp(){
  appFrame.style.display = "none"
  var e = setTimeout(()=>{appFrame.style.display="block"},1)
}
function shareApp(){
  const message1212 = "Press OK to copy the URL to the clipboard"
  if (confirm(message1212)){
    const ctxt = document.getElementById("url_to_copy")
    alert("Copied the URL to your clipboard")
    ctxt.select()
    ctxt.setSelectionRange(0,999)
    navigator.clipboard.writeText(ctxt.value)
  }
}
function closeApp(){
  document.getElementById("appmenu").style.display = "block"
  document.getElementById("appwin").style.display = "none"
  appFrame.style.display = "none"
  app.style.display = "none"
  bRow.style.display = "none"
}
