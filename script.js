const checkbox = document.querySelectorAll('.expand');
const answer = document.querySelectorAll('.answerContent');
const arrow = document.querySelectorAll('.questionBar span');


checkbox.forEach(cb => {
  let height;
  let scaleY;
  cb.addEventListener('change', function () {
    if (cb.checked === true) {
      height = `height: 100%`;
      scaleY = `transform: scaleY(${-1})`;
    } else {
      height = height = `height:0`;

      scaleY = `transform: scaleY(${1})`;

    }
    // expand the answer to this question
    cb.nextSibling.parentNode.nextElementSibling.style = height;
    // flip arrow
    cb.previousElementSibling.style = scaleY;
  })
})