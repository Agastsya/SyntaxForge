const express = require("express");
const app = express();

{
  /* Middlewares */
}
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
app.set("view engine", "ejs");
app.use(express.static("public"));

{
  /* SERVER CONENCTION */
}
mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/BackendSyntaxForge")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error :" + err);
  });
const bsfSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const BackendSyntaxForge = mongoose.model("BackendSyntaxForge", bsfSchema);

const adder = async () => {
  const newUser = await BackendSyntaxForge.create({
    name: "Rajneesh Singh",
    age: 24,
    email: "rajneeshsingh04@gmail.com",
  });
};
adder();
console.log("set time out checker");

app.get("/", (req, res) => {
  res.send("Hello world from BackendSyntaxForge!");
  console.log("root route accessed");
});

app.get("/dynamic", (req, res) => {
  res.render("index", { name: "Agastsya Joshi" });
});

app.get("/dynamic/:name", (req, res) => {
  res.send(`Hello ${req.params.name} from BackendSyntaxForge!`);
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running on port 3000");
});
