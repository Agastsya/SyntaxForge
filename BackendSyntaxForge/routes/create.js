import BackendSyntaxForge from "../models/User.js";

// CREATE TASK
const task_creator = (task) => {
  return BackendSyntaxForge.create({
    task: task,
  });
};

// DELETE TASK
const task_destroyer = (id) => {
  return BackendSyntaxForge.findByIdAndDelete(id);
};

// UPDATE TASK
const task_updater = (id, newTask) => {
  return BackendSyntaxForge.findByIdAndUpdate(
    id,
    { $set: { task: newTask } },
    { new: true }
  );
};

// GET TASK
const task_reader = (task) => {
  return BackendSyntaxForge.find();
};

export default { task_creator, task_reader, task_updater, task_destroyer };
