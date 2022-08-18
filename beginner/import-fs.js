import fs from "fs/promises";
const fs = require("fs").promises;

fs.appendFile("./added_file.txt", data)
  .catch(console.error);
