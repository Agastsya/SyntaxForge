import axios from "axios";
import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa6";
import { toast } from "sonner";

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
      toast.error("ERROR : " + e);
    }
  };
  const taskAdder = async () => {
    if (task.trim() === "") {
      toast.error("Please Enter your task");
      return;
    }
    await axios
      .post("http://localhost:3000/add", {
        task: task,
      })
      .then(() => {
        toast.success("New Task Added");
        setTask("");
        taskGetter();
      })
      .catch(() => {
        toast.error("ERROR : " + e);
      });
  };

  const taskDestroyer = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      taskGetter();
      toast.success("Task Deleted");
    } catch (e) {
      toast.error("ERROR : " + e);
    }
  };

  const taskUpdater = async (id) => {
    try {
      if (editText.trim() === "") return;
      await axios.put(`http://localhost:3000/update/${id}`, {
        task: editText,
      });
      toast.success("Task Updated");
      setEditId(null);
      setEditText("");
      taskGetter();
    } catch (e) {
      toast.error("ERROR : " + e);
    }
  };

  useEffect(() => {
    taskGetter();
  }, []);

  return (
    <div className="text-white items-center flex flex-col">
      <h1 className="text-4xl">SyntaxForge Planner</h1>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="text-white">Enter new task</label>
        <input
          type="text"
          value={task}
          className="text-black min-w-[50vw] pl-1 focus:outline-none"
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
        {data.map((item, done = false) => (
          <div
            className="text-black bg-white h-[4vh] m-1 pl-1 pr-1 min-w-[50vw] flex justify-between items-center cursor-pointer"
            key={item._id}
            onClick={() => {
              setEditId(item._id);
              setEditText("");
            }}
          >
            {editId === item._id ? (
              //UPDATE INPUT BOX
              <div className="flex justify-between w-full">
                <input
                  type="text"
                  className="w-full bg-gray-200 focus:outline-none"
                  placeholder={item.task}
                  value={editText}
                  onChange={(e) => {
                    setEditText(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      e.preventDefault();
                      taskUpdater(item._id);
                    }
                  }}
                />
                <div className="flex gap-x-1">
                  <button
                    className="bg-red-500 h-6 pl-1 pr-1 text-white font-extrabold"
                    onClick={() => setEditId(null)}
                  >
                    X
                  </button>
                  <button
                    className="bg-blue-500 h-6 pl-1 pr-1 text-white font-extrabold"
                    onClick={() => {
                      taskUpdater(item._id);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              //Toggle operation buttons
              <div className="flex justify-between w-full">
                <span>{item.task}</span>
                <div className="flex gap-x-1">
                  <button
                    className="bg-red-500 h-6 pl-1 pr-1 text-white font-extrabold "
                    onClick={() => taskDestroyer(item._id)}
                  >
                    X
                  </button>

                  <button
                    className="bg-blue-500 h-6 pl-1 pr-1 text-white font-extrabold"
                    onClick={() => setEditId(item._id)}
                  >
                    <FaPen color="white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
