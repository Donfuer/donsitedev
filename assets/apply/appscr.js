//URLs of the apply pages
const url2B = "https://docs.google.com/forms/d/e/1FAIpQLSd6j8_tkTxyQ8u5NwR_S6G6GGWo5L2Z1gtr7BxXUl3CEtg2oQ/viewform?embedded=true"
const urlPA = "https://docs.google.com/forms/d/e/1FAIpQLSctbAXk7V1fLgSIhB9Di_oH_PQOlOEGC9cNt2VL7V55_36HDA/viewform?embedded=true"
const urlSW = "https://docs.google.com/forms/d/e/1FAIpQLSdZS3ppnm1n2cmFnEjZqqRmXKhNESbBYpvrMrYKk8d-nRp4AQ/viewform?embedded=true"
const url9B = "https://docs.google.com/forms/d/e/1FAIpQLSfj0F5rn6dvrEVnnZOP5qW898CTCRoZ9ZDSBtkAAp1-icx77w/viewform?embedded=true"

const appFrame = document.getElementById('appframe')
const app = document.getElementById('app')
const scrBut = document.getElementById("myBtn")
apply = (branch) => {
  //something here about setting height to be something
  if (branch == "2B"){
    app.src = url2B
  }
  else if (branch == "PA"){
    app.src = urlPA
  }
  else if (branch == "SW"){
    app.src = urlSW
  }
  else if (branch == "9B"){
    app.src = url9B
  }

  document.getElementById("appmenu").style.display = "none"
  document.getElementById("appwin").style.display = "block"
  appFrame.style.display = "block"
  app.style.display = "block"
  scrBut.style.display = "block"
}

function topApp(){
  appFrame.style.display = "none"
  var e = setTimeout(()=>{appFrame.style.display="block"},1)
}
function shareApp(){
  const message1212 = "Press OK to copy the URL to the clipboard - https://www.donfuer.com/apply"
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
  scrBut.style.display = "none"
}