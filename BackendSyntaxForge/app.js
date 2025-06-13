const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world from BackendSyntaxForge!");
  console.log("root route accessed");
});

app.get("/dynamic/:name", (req, res) => {
  res.send(`Hello ${req.params.name} from BackendSyntaxForge!`);
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running on port 3000");
});
