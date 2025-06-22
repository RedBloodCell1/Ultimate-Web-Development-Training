const fs = require("fs");

// fs.writeFile("text.txt", "Nice", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
