//URLs of the apply pages
const url2B = "https://docs.google.com/forms/d/e/1FAIpQLSd6j8_tkTxyQ8u5NwR_S6G6GGWo5L2Z1gtr7BxXUl3CEtg2oQ/viewform?embedded=true"
const urlPA = "https://docs.google.com/forms/d/e/1FAIpQLSctbAXk7V1fLgSIhB9Di_oH_PQOlOEGC9cNt2VL7V55_36HDA/viewform?embedded=true"
const urlSW = "https://docs.google.com/forms/d/e/1FAIpQLSdZS3ppnm1n2cmFnEjZqqRmXKhNESbBYpvrMrYKk8d-nRp4AQ/viewform?embedded=true"
const url9B = "https://docs.google.com/forms/d/e/1FAIpQLSfj0F5rn6dvrEVnnZOP5qW898CTCRoZ9ZDSBtkAAp1-icx77w/viewform?embedded=true"

const appFrame = document.getElementById('appFrame')
const app = document.getElementById('app')
apply = (branch) => {
  document.getElementById("appwin").style.display="block"
  appFrame.style.display="block"
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
}