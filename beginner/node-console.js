console.log("default");
console.clear(); // 로그화면 clear

// 1. log level
console.log("log"); // 개발용
console.info("info");
console.warn("warn");
console.error("error"); // 에러

// 2. assert (첫 인자가 false 일때, 로그 출력)
console.assert(1 === 2, "not same!");

// 3. object
let table = {name: "nami", age: 26, company: {name: "GOOGLE"}};
console.log(table);
console.table(table);
console.dir(table); // 옵션 설정
console.dir(table, {showhidden: true, colors: true, depth: 2}); // 옵션 설정
console.dir(table, {showhidden: true, colors: false, depth: 2}); // 옵션 설정
console.dir(table, {showhidden: true, colors: false, depth: 0}); // 옵션 설정

// 4. measuring time, 성능 측정할 때 용이
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// 5. counting, 해당 함수의 호출 횟수
function a() {
  console.count("a function");
}

a();
a();
a();

// 6. trace, debug에 유용
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace(); // f3 <= f2 <= f1
}

f1();
