import BackendSyntaxForge from "../models/User.js";

// CREATE TASK
const task_creator = (task) => {
  return BackendSyntaxForge.create({
    task: task,
  });
};

// DELETE TASK
const task_destroyer = (task) => {
  return BackendSyntaxForge.deleteOne({ task: task });
};

// UPDATE TASK
const task_updater = (task) => {
  return BackendSyntaxForge.updateOne({ task: task });
};

// GET TASK
const task_reader = (task) => {
  return BackendSyntaxForge.find();
};

export default { task_creator, task_reader, task_updater, task_destroyer };
