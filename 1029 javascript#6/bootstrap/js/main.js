// Selector

// var header = document.getElementsByTagName("header");
// var services = document.getElementById("services");
// var container = document.getElementsByClassName("container");

// var serviceContainer = document
//   .getElementById("services")
//   .getElementsByClassName("container");

// console.log(serviceContainer);

/*
var header = document.querySelector("header");
var services = document.querySelector("#services");
var container = document.querySelector(".container");

console.log(header);
console.log(services);
console.log(services);
console.log(services);
console.log(header);

var serviceContainer = document.querySelector("#services .container");
console.log(serviceContainer);


var container = document.querySelectorAll(".container");
// console.log(container);

for (var i = 0; i < container.length; i++) {
  //   console.log(container[i]);
  container[i].style.backgroundColor = "yellow";
}


// innerHRML, outerHTML
// var header = document.querySelector(".masthead");

// console.log(header.innerHTML);
// console.log(typeof header.outerHTML);

// header.innerHTML = "<h1>Hello World</h1>";

// textContent
// var heading = document.querySelector(".masthead-heading");

// // console.log(heading.textContent);
// // heading.textContent = "Nice";

// // heading.textContent = "<em>Hello</em> World";
// // heading.innerHTML = "<em>Hello</em> World";

// console.log(heading.innerText);
// console.log(heading.textContent);

// createElement
var h3Test = document.createElement("h3");
h3Test.textContent = "Hello World!!!";

// console.log(h3Test);

// appendChild
var master = document.querySelector(".masthead");
master.appendChild(h3Test);

var masterContainer = document.querySelector(".masthead .container");
masterContainer.appendChild(h3Test);

var masterHeader = document.querySelector(".masthead-heading");
masterHeader.appendChild(h3Test);
*/

//appendCihld 주의점
// var subHeading = document.querySelector(".masthead-subheading");
// var heading = document.querySelector(".masthead-heading");
// var btn = documnet.querySelector(".masthead .btn");

// subHeading.appendChild(h3Test);
// subHeading.appendChild(h3Test);
// subHeading.appendChild(h3Test);

// insert
// var heading = document.querySelector(".masthead-heading");
// var txt = "<h3>!!!!!!!!!!</h3>";

// heading.insertAdjacentHTML("afterend", txt);

// removeChild(), remove()

// var headCointer = document.querySelector(".masthead .continer");

// var heading = document.querySelector(".masthead-heading");

// heading.style.color = "red";
// heading.style.backgroundColor = "pink";

// heading.style.cssText = "color:red; background-color:pink; font-size:25px";

// heading.setAttribute("id", "test");

// // className, classList
// var heading = document.querySelector(".masthead-heading");
// // var headingClass = heading.className;
// // var headingArr = headingClass.split(" ");

// // console.log(headingClass);

// var headingClass = heading.classList;

/*
var heading = document.querySelector(".masthead-heading");

heading.addEventListener("keyup", function () {
  console.log("click");
});

var heading = document.querySelector(".masthead-heading");

function test() {
  console.log("클릭");
}

heading.addEventListener("click", test);
heading.removeEventListener("click", test);


// 참조타입 : 배열, 갹체, 함수

var heading = document.querySelector(".masthead-heading");

heading.addEventListener("click", function test() {
  console.log("click");
});

heading.removeEventListener("click", function test() {
  console.log("click");
});

var obj1 = { name: "kim" };
var obj2 = obj1;

console.log(obj1 === obj2);
*/
