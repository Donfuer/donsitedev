/*site by volker1*/
const max = 8
const max1 = 8
const seq = document.getElementById('sequence')
const seq1 = document.getElementById('sequencea')
var num = 0
var num1 = 0
img = (e) => {
  if (e == 0) {
    num--
    if (num < 0) {
      num = max
    }
    seq.style = "background-image:url(../assets/gallery/window/" + num + ".webp)"
  } else if (e == 1) {
    num++
    if (num > max) {
      num = 0
    }
    seq.style = "background-image:url(../assets/gallery/window/" + num + ".webp)"
  } else if (e == 2) {
    num1--
    if (num1 < 0) {
      num1 = max1
    }
    seq1.style = "background-image:url(../assets/gallery/window1/" + num1 + ".webp)"
  } else if (e == 3) {
    num1++
    if (num1 > max1) {
      num1 = 0
    }
    seq1.style = "background-image:url(../assets/gallery/window1/" + num1 + ".webp)"
  }
}