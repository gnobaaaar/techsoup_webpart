var form = document.getElementById("form");

var input = document.getElementById("msg");
var feedback = document.querySelector(".feedback");
var txt = document.getElementById("txt");

// browser refresh -> preventEventListener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(e);
  // console.log("제출");

  var msg = input.value;

  if (msg) {
    txt.textContent = msg;
    form.reset();
    // console.log("true");
  } else {
    // console.log("false");
    feedback.classList.add("show");

    setTimeout(function () {
      feedback.classList.remove("show");
    }, 2000);
  }
});

// setTimeout(callback function, time)
// 2000 => 2sec
// setTimeout(function () {
//   console.log("2초 후에 실행");
// }, 2000);
