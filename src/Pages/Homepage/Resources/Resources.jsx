import axios from "axios";
import { useState, useEffect } from "react";

export default function Resources() {
  // States for managing task
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  // States for managing update
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const taskGetter = async () => {
    try {
      const response = await axios.get("http://localhost:3000/readAll");
      setData(response.data);
    } catch (e) {
      console.log("error : " + e);
    }
  };
  const taskAdder = () => {
    if (task.trim() === "") return;
    axios
      .post("http://localhost:3000/add", {
        task: task,
      })
      .then(() => {
        setTask("");
        taskGetter();
      });
  };

  const taskDestroyer = (id) => {
    try {
      axios.delete(`http://localhost:3000/delete/${id}`);
      taskGetter();
    } catch (e) {
      console.log("Error : " + e);
    }
  };

  const taskUpdater = (id) => {
    try {
      if (editText.trim() === "") return;
      axios.put(`http://localhost:3000/update/${id}`, {
        task: editText,
      });
      setEditId(null);
      setEditText("");
      taskGetter();
    } catch (e) {
      console.log("Error : " + e);
    }
  };

  useEffect(() => {
    taskGetter();
  }, []);

  return (
    <div className="text-white items-center flex flex-col">
      <h1 className="text-4xl">Task Planner</h1>
      <form className="flex flex-col">
        <label className="text-white">Enter new task</label>
        <input
          type="text"
          value={task}
          className="text-black min-w-[50vw] pl-1"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="pl-1 border border-r-2 min-w-[50vw] hover:bg-white hover:text-black"
          onClick={() => taskAdder()}
        >
          Submit Task
        </button>
      </form>
      <div className="mt-2">
        {data.map((item) => (
          <div
            className="text-black bg-white h-[4vh] m-1 pl-1 pr-1 min-w-[50vw] flex justify-between items-center"
            key={item._id}
          >
            {editId === item._id ? (
              //Toggle input box
              <div className="flex justify-between w-full">
                <input
                  type="text"
                  placeholder={item.task}
                  value={editText}
                  onChange={(e) => {
                    setEditText(e.target.value);
                    console.log(editText);
                  }}
                />
                <div>
                  <button
                    className="bg-blue-500 h-6 pl-1 pr-1 text-white font-extrabold"
                    onClick={() => taskUpdater(item._id)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              //Toggle opertion buttons
              <div className="flex justify-between w-full">
                <div>{item.task}</div>
                <div className="flex gap-x-1">
                  <button
                    className="bg-red-500 h-6 pl-1 pr-1 text-white font-extrabold "
                    onClick={() => taskDestroyer(item._id)}
                  >
                    X
                  </button>
                  <button
                    className="bg-green-500 h-6 pl-1 pr-1 text-white font-extrabold "
                    onClick={() => taskDestroyer(item._id)}
                  >
                    Mark
                  </button>
                  {item._id === null ? (
                    <div>
                      <button
                        className="bg-blue-500 h-6 pl-1 pr-1 text-white font-extrabold"
                        onClick={() => taskUpdater(item._id)}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="bg-blue-500 h-6 pl-1 pr-1 text-white font-extrabold"
                        onClick={() => setEditId(item._id)}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
