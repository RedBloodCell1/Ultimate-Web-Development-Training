import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/contact", (req, res) => {
  res.send("contact me");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
