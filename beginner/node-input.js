const readline = require("readline");
const readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.on("line", (response)=>
       console.log(response)  // 사용자 입력값 변수 : response
).on("close", ()=>
  process.exit();
)
