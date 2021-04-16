const S = require("string");
const fs = require('fs')

const filesArr = [];
const trimmedArr = [];

fs.readFile("testowy-js.txt", "utf-8", (err, data) => {
  const lines = data.split("\n");
  let counter = 1;

  lines.forEach((line) => {
    let trimmed = S(line).between("", ":").s;
    while (S(trimmed).contains("/")) {
      trimmed = S(trimmed).between("/").s;

      if (!S(trimmed).contains("/")) {
        trimmedArr.push(trimmed);
      }
    }
  });

  trimmedArr.forEach((world, index) => {
    if (world === trimmedArr[index + 1]) {
      counter++;
    } else {
      const newLine = { counter: counter, file: world };
      filesArr.push(newLine);
      fs.appendFile('out.txt', counter+";"+world+"\n", function (err) {
        if (err) return console.log(err);
        
     });
      counter = 1;
    }
  });
  console.log("filesArr: ", filesArr);
});

