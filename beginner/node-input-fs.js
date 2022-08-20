// 1
const inputs = require("fs").readFileSync(0, "utf-8").toString().split(" ");

// 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

//3
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = Number(input);
