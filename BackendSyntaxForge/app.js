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
  .connect(
    "mongodb+srv://agastsya007:king1111@initial.t0m8zpp.mongodb.net/BackendSyntaxForge?retryWrites=true&w=majority&appName=initial"
  )
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
app.put("/update/:id", async (req, res) => {
  const task = req.body.task;
  const id = req.params.id;
  await taskFunctions
    .task_updater(id, task)
    .then(() => {
      res.send("Updated task");
    })
    .catch(() => {
      res.send("Error Encountered");
    });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await taskFunctions
    .task_destroyer(id)
    .then(() => {
      res.send("task removed");
      console.log("task removed");
    })
    .catch((err) => {
      console.log("error : " + err);
    });
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running on port 3000");
});
