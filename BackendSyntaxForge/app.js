import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskFunctions from "../BackendSyntaxForge/routes/create.js";

{
  /* Middlewares */
}

const app = express();
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

{
  /* DATABASE CONENCTION */
}
mongoose
  .connect("mongodb://localhost:27017/BackendSyntaxForge")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error :" + err);
  });

{
  /*Routes*/
}

//Create Object Route
app.post("/add", async (req, res) => {
  const task = req.body.task;

  taskFunctions
    .task_creator(task)
    .then(() => {
      res.send("API IS WORKING");
    })
    .catch((err) => {
      res.send("ERROR : " + err.message);
    });
});

// Read Objects
app.get("/readAll", async (req, res) => {
  const data = await taskFunctions.task_reader();
  res.json(data);
});

// Update Object
app.post("/update", async (req, res) => {
  const task = req.body.task;
  await taskFunctions
    .task_updater(task)
    .then(() => {
      res.send("Updated task");
    })
    .catch(() => {
      res.send("Error Encountered");
    });
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running on port 3000");
});
