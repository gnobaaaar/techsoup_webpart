//if문
// var a = 20;
// var b = 40;
// var c = 60;

/*
if (a < b) {
  console.log("a는 b보다 작다");
}

if (a > b) {
  console.log("a는 b보다 크다");
} else {
  console.log("a는 b보다 작다");
}

if (a > b) {
  console.log("a is bigger than b");
} else if (b > c) {
  console.log("b is bigger than c");
} else if (a < c) {
  console.log("a is smaller than c");
} else if (b < c) {
  console.log("b is smaller than c");
} else {
  console.log("모든 조건을 만족하지 않는다");
}
*/

/*
if (a !== b) {
  if (a > b) {
    console.log("a는 b보다 크다.");
  } else {
    console.log("a는 b보다 작다.");
  }
} else {
  console.log("a와 b는 같다.");
}

// 거짓이 되는 상황
// 빈문자열'', 숫자0, null, undefined
if (0) {
  console.log("참!!!");
} else {
  console.log("거짓!!!");
}

//삼항 연산자
var age = 15;

if (age >= 18) {
  console.log("성인");
} else {
  console.log("어린이");
}

var result = age >= 18 ? "성인" : "어린이";
console.log(result);


var userId = prompt("아이디를 입력해주세요.");
var userPw = prompt("비밀번호를 입력해주세요.");

console.log(userId);
console.log(typeof userPw);

if (userId === "kim" && parseInt(userPw) === 12345) {
  alert("로그인 되었습니다.");
} else {
  alert("아이디 또는 비밀번호가 틀렸습니다.");
}
*/

/*
//전역변수와 지역변수
var gloV = "전역변수";

function func() {
  var localV = "지역변수";

  console.log(gloV);
  console.log(localV);
}

//func()
console.log(gloV);
console.log(localV);


//let, const

var gv = "전역변수";

function func() {
  //var 키워드가 제거되면 전역변수의 값의 변경이 이루어진다
  gv = "지역변수";
  console.log(gv);
}

func();
console.log(gv);


var gv = "global";

// 전역과 지역의 구분은 중괄호가 아닌 함수가 기준이다
if (true) {
  var lv = "local";

  //console.log(gv);
  //console.log(lv);
}

console.log(gv);
console.log(lv);
*/

// var gv = "전역변수";
// var aaa = "aaa";

// function a() {
//   console.log("a");
// }

/*
var gv = "전역변수";

function func() {
  console.log(gv);
}

func();

console.log(gv);

//지역스코프
function func(){
    var lv = '지역변수';
    console.log(lv)
}
func();
console.log(lv);


//함수는 서로의 스코프에 접근할 수 없다!
function a() {
  var apple = "apple";
}

function b() {
  a(); //var apple = 'apple'; => x
  console.log(apple);
}

b();

// scope chain
var a = 10;

function func1() {
  var b = 20;

  function func2() {
    var c = 30;

    console.log(a + b + c);
  }
  func2();
}
func1();

//scoping
var name = "Inkwon";
a = 3.14;

function func1() {
  console.log(name);
}

function func2() {
  var name = "Jun";
  func1(); // console.log(name) X
}

func2();
*/

/*
//***호이스팅***
//변수 호이스팅
console.log(a);
// var a;
// a = "나는 a다";

var a = "나는 a다"; // 선언한 상태(호이스팅 대상)와 초기화 상태가 다르게 인식

console.log(a);
// console.log(a);

//함수 호이스팅
func1();

function func1() {
  console.log("func1");
}

// func1();

// var func2 = undefinded 상태

func2();

var func2 = function () {
  console.log("func2 function");
};

// func2();
*/

/*
//Math
// console.log(Math);

var num1 = Math.abs(-3);
console.log(num1);

var num2 = Math.ceil(0.3);
console.log(num2);

var num3 = Math.floor(10.9);
console.log(num3);

var num4 = Math.random();
console.log(num4);


// parseInt(), parseFloat()
var str1 = "20.6";
var str2 = "3.14";

var num1 = parseInt(str1);
var num2 = parseFloat(str2);

console.log(num1);
console.log(num2);


// 반복문
// 고정값 : console.log(2*);
// 일정한 규칙이 있는 기반값 : 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(2 * 1);
console.log(2 * 2);
console.log(2 * 3);
console.log(2 * 4);
console.log(2 * 5);
console.log(2 * 6);
console.log(2 * 7);
console.log(2 * 8);
console.log(2 * 9);

// while
var num = 1; // 2

while (num < 10) {
  // 2 * 1 = 2
  // 2 * 2 = 4
  // 2 * 3 = 6
  console.log(2 * num);
  num += 2;
}

console.log("반복문 종료");

//do ~ while
var i = 12;

do {
  console.log(i);
  i++;
} while (i < 10);

// for
// 고정값, 일정한 규칙을 갖고 있는 가변값
var i;

for (i = 1; i < 10; i++) {
  console.log(2 * i);
}
*/

// 중첩 반복문
// 중첩 for문

// 2 ~ 9단
/*
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    console.log(i * j);
  }
}


// break, continue
for (var i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(2 * i);
}


var arr = ["바나나", "사과", "수박"];
// console.log(arr);
// console.log(arr.length);

// 고정값 console.log(arr[])
// 가변값 0,1,2

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for ~ in
// for (var i in arr) {
//   console.log(i);
//   console.log(arr[i]);
// }

// 익명함수, 콜백함수
// .addEventListener('click', function(){

// })

// forEach() -> 매서드를 호출
// 익명함수, 콜백함수(나중)
// arr.forEach(function (element, index) {
//   console.log(element);
//   console.log(index);
// });

// .map(data, index of data)
// map은 return을 사용가능하다
// arr.map(function (element, index) {
//   console.log(element);
//   console.log(index);
// });

// return을 사용하여 각 데이터를 조정가능하다
// 배열 형태로 출력된다
var result = arr.map(function (element, index) {
  return element + " " + "10";
});

console.log(result);

// object 내부 접근하기
var student = {
  name: "Kim",
  age: 20,
  skills: ["자바스크립트", "html", "css"],

  sum: function (num1, num2) {
    console.log(num1 + num2);
  },
};

// for ~ in
// 1. student.name
// 2. student['name']
// prop은 key값이다
for (var prop in student) {
  console.log(prop);
  console.log(student[prop]);
}

// array : forEach(), map(), length

// string
// var length
var txtLength = "    Hello World";

console.log(txtLength.length); //length: 문자열의 길이를 가져온다(공백포함)
console.log(txtLength.trim().length);   // trim : 좌우 문자열의 공백을 제거한다


var result = prompt("plz enter your name");

console.log(result);
console.log(result.trim().length);


var str = "Nice to meet you to to";

// console.log(str.length);
// console.log(str.charAt(str.length - 1));

// slice(시작인덱스 이상, 끝인덱스 미만)
// console.log(str.slice(2));

// ***split -> 일정한 규칙으로 문자열로 잘라내고 배열로 리턴해준다
// console.log(str.split("/"));

// replace
// console.log(str.replace("Nice", "Hello"));

// 시작 위치의 인덱스값을 보여준다, 대소문자구분
// console.log(str.indexOf("to"));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

var search = prompt("검색어를 입력해주세요");
if (search.toLowerCase() === "apple") {
  console.log("사과 데이터를 출력한다");
} else {
  console.log("false");
}
*/

/*
var arr = ["사과", "배", "수박"];

// console.log(arr.length);

// arr.push("포도", "토마토");
// console.log(arr);

// unshift -> 앞에서부터 배열의 아이템을 삽입해준다
// arr.unshift("포도");
// arr.unshift("토마토");
// console.log(arr);

// arr.pop();
// arr.pop();

// console.log(arr);

// 앞에서 부터 데이터가 삭제 <-> unshift
// arr.shift();
// console.log(arr);
*/

// 조인 : 배열 내의 문자열의 결합이 가능하다
// var arr1 = ["사과", "배", "바나나"];
// var arr2 = ["노트북", "마이크", "키보드"];
// // var str1 = arr1.join(", ");
// // console.log(str1);

// var merge = arr1.concat(arr2);
// console.log(merge);

// 배경색 바꾸기 실습
var hex = document.getElementById("hex");
var btn = document.getElementById("btn");

// console.log(hex);
// console.log(btn);

btn.addEventListener("click", createColor);

function createColor() {
  // console.log("click");
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  var color = "#";

  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * arr.length); // 배열의 길이 만큼 0부터 search
    color += arr[random];
  }

  document.body.style.backgroundColor = color;
  hex.textContent = color;
}

// hex code
// #000fff;
// 숫자 0 - 9
// 알파벳 : a - f
// 6글자 조합(숫자와 알파벳의 조합)

// # + 0 = #0
// #0 + f = #0f 와 같은 방식의 반복으로 글자를 완성
