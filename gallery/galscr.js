/*site by volker1*/
const max = 8
const max1 = 8
const seq = document.getElementById('sequence')
const seq1 = document.getElementById('sequencea')
var num = 0
var num1 = 0
img = e => {
  switch(e){
    case 0:
      num --
      if (num < 0) num = max
      seq.style = setStyle("",num)
    break
    case 1:
      num++
      if (num > max) num = 0
      seq.style = setStyle("",num)
    break
    case 2:
      num1--
      if (num1 < 0) num1 = max1
      seq1.style = setStyle("1",num1)
    break
    case 3:
      num1++
      if (num1 > max1) num1 = 0
      seq1.style = setStyle("1",num1)
    break
    default:
      console.log("error! no number used!")
    break
  }
}
setStyle = (id,num) => {
  return `background-image:url(window${id}/${num}.webp)`
}