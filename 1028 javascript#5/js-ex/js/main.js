/*
var arr = [
  {
    img: "img/img-0.jpg",
    name: "사과 이름 0",
    txt: "사과 설명 0",
  },
  {
    img: "img/img-1.jpg",
    name: "사과 이름 1",
    txt: "사과 설명 1",
  },
  {
    img: "img/img-2.jpg",
    name: "사과 이름 2",
    txt: "사과 설명 2",
  },
  {
    img: "img/img-3.jpg",
    name: "사과 이름 3",
    txt: "사과 설명 3",
  },
];

var i = 0;

// console.log(document.querySelectorAll(".btn"));
document.querySelectorAll(".btn").forEach(function (element, index) {
  //   console.log(element);

  element.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("Hello");
    // target -> click 한 영역을 가져오게 된다
    // console.log(e.target);

    if (e.target.classList.contains("preBtn")) {
      //   console.log("Prev");
      if (i === 0) {
        i = arr.length;
      }

      i--;

      document.getElementById("img").src = arr[i].img;
      document.getElementById("name").textContent = arr[i].name;
      document.getElementById("txt").textContent = arr[i].txt;
    }

    if (e.target.classList.contains("nextBtn")) {
      //   console.log("Next");

      if (i === arr.length - 1) {
        i = -1;
      }

      i++;

      document.getElementById("img").src = arr[i].img;
      document.getElementById("name").textContent = arr[i].name;
      document.getElementById("txt").textContent = arr[i].txt;
    }
  });
});
*/

// class
// 객체지향 프로그래밍(OOP)
/*
var sperMan = {
  name: "슈퍼맨",
  age: 30,
  gender: "남성",
  skills: ["레이저빔", "공중부양", "파워"],
};

var spiderMan = {
  name: "스파이더맨",
  age: 18,
  gender: "남성",
  skills: ["거미줄", "벽타기", "스파이더센서"],
};

var sperMan = {
  name: "블랙위도우",
  age: 34,
  gender: "여성",
  skills: ["격투", "암살", "잠입"],
};


// 생성자 함수 : 붕어빵 틀
function Heroes(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

// 인스턴스
var superMan = new Heroes("슈퍼맨", 30);
var blackWidow = new Heroes("블랙위도우", 35);

console.log(superMan);
console.log(blackWidow);


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

var kim = new Person("Inkweon", "Kim");
var park = new Person("David", "Park");

console.log(kim);
console.log(park);

kim.fullName();
park.fullName();

// prototype
// Person 생성자 함수를 만들 때 Person.protoype 객체를 같이 생성한다
// Person.prototype = 조상
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

// 인스턴스 = 후손
var kim = new Person("Inkweon", "Kim");
var park = new Person("David", "Park");

kim.fullName();
park.fullName();

console.log(kim);
console.log(park);

//  __proto__
// var arr1 = [];

// var str1 = "Hello";

// var func1 = function () {};

var arr2 = new Array();
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x*y");

console.log(arr2);
console.log(str2);

var person = new Object();

person.name = "Inkweon";
person.sayHi = function () {
  console.log(hi);
};

console.log(person);
console.log(person.__proto__ === Object.prototype);


var arr2 = new Array();
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x * y");

console.log(arr2.__proto__ === Array.prototype);
console.log(str2.__proto__ === String.prototype);
console.log(func2.__proto__ === Function.prototype);

console.log(String.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

console.log(func2);


// constructor
var str11 = new String("Nice");

console.dir(str11);
// str11 의 생성자 함수는?
console.dir(str11.constructor);
console.log(str11.constructor === String);
console.log(String.prototype.constructor === String);

var arr11 = new Array();

console.log(arr11.constructor === Array);
console.log(Array.prototype.constructor === Array);

var func11 = new Function();
console.log(func11.constructor === Function);
console.log(Function.prototype.constructor === Function);


var str21 = new String("AAA");
var arr21 = new Array();

console.log(String.__proto__ === Function.prototype);
console.log(Array.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);
*/

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// var kim = new Person("Inkweon", "Kim");

// console.log(kim);
// console.log(kim.__proto__ === Person.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(kim.__proto__ === Object.prototype);

// console.log(Person.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);

// console.log(kim.constructor === Person);
// console.log(Person.prototype.constructor);

// this
// 일반함수 this -> window
// 중첩함수 this -> window
// 이벤트 this -> event object
// 메서드 this -> 객체
// 메서드 안에 함수가 들어가 있다면 this -> window
// 중첩으로 들어가 있
/*는 함수 안에서의 this -> window

// 함수 this
function a() {
  function b() {
    console.log(this);
    // body
  }
  b();
}
a();


var prevBtn = document.querySelector(".preBtn");

prevBtn.addEventListener("click", function () {
  console.log(this);
});

var obj = {
  age: 100,
  sum: function () {
    console.log(this.age);
    function a() {
      console.log(this);
    }

    a();
  },
};

obj.sum();

// that
var obj = {
  age: 100,
  sum: function () {
    var that = this;

    function a() {
      console.log(that);
    }

    a();
  },
};

obj.sum();


// 템플릿 리터널(template literal)
// `` : 백틱을 활용
// var name = "기발자";

// // console.log("내 이름은" + " " + name + "입니다");
// console.log(`내 이름은 ${name}입니다.`);

var arr = [];
var i = 0;

function Customer(name, img, txt) {
  this.name = name;
  this.img = img;
  this.txt = txt;
}

function createCustomer(name, img, txt) {
  var fullImg = `img/img-${img}`;
  var customer = new Customer(name, fullImg, txt);

  arr.push(customer);
}

createCustomer("사과 1 이름", 0, "사과 1 설명");
createCustomer("사과 2 이름", 1, "사과 2 설명");
createCustomer("사과 3 이름", 2, "사과 3 설명");
createCustomer("사과 4 이름", 3, "사과 4 설명");

console.log(arr);

document.querySelectorAll(".btn").forEach(function (element, index) {
  //   console.log(element);

  element.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("preBtn")) {
      if (i === 0) {
        i = arr.length;
      }

      i--;

      document.getElementById("img").src = arr[i].img;
      document.getElementById("name").textContent = arr[i].name;
      document.getElementById("txt").textContent = arr[i].txt;
    }

    if (e.target.classList.contains("nextBtn")) {
      if (i === arr.length - 1) {
        i = -1;
      }

      i++;

      document.getElementById("img").src = arr[i].img;
      document.getElementById("name").textContent = arr[i].name;
      document.getElementById("txt").textContent = arr[i].txt;
    }
  });
});
*/
