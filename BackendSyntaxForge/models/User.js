import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  task: String,
});

const BackendSyntaxForge = mongoose.model("taskManager", userSchema);

export default BackendSyntaxForge;
