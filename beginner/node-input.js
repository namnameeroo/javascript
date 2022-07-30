const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (response) => {
  console.log(response); // 사용자 입력값 변수 : response
  rl.close();
}).on("close", () => {
  process.exit();
});
