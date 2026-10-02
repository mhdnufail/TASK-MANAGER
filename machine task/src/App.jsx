import { useState } from "react";

function App() {

  const [task, setTask] = useState("");

  const [priority, setPriority] = useState("Medium");

  const [list, setList] = useState([]);

  const [editName, setEditName] = useState("");
  const [editPriority, setEditPriority] = useState("Medium");


  

  const addTask = () => {

    if (task.trim() === "") {
      return;
    }

   

    const newTask = {
      name: task,
      priority: priority,
      status: "Pending"
    };

    setList([...list, newTask]);

    setTask("");
    setPriority("Medium");
  };



  const deleteTask = (index) => {

    setList(
      list.filter((_, i) => i !== index)
    );
  };



  const completeTask = (index) => {

    const updatedList = [...list];

    updatedList[index].status = "Completed";

    setList(updatedList);
  };



  const startEdit = (index) => {

    setEditIndex(index);

    setEditName(list[index].name);

    setEditPriority(list[index].priority);
  };



  return (
    <div className="container">

      <h1>TASK MANAGER APP</h1>


      <div className="add-section">

        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        />



        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>

        </select>


        <button onClick={addTask}>
          Add Task
        </button>

      </div>


      <div className="task-container">

        {list.map((item, index) => (

          <div
            className={
              item.status === "Completed"
                ? "task-card completed"
                : "task-card"
            }
            key={index}
          >


            {editIndex === index ? (

              <>

                <input
                  type="text"
                  value={editName}
                  onChange={(e) =>
                    setEditName(e.target.value)
                  }
                />


                <select
                  value={editPriority}
                  onChange={(e) =>
                    setEditPriority(e.target.value)
                  }
                >

                  <option value="High">
                    High
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="Low">
                    Low
                  </option>

                </select>


                <div className="buttons">

                  <button
                    onClick={saveEdit}
                    className="save"
                  >
                    Save
                  </button>


                  <button
                    onClick={cancelEdit}
                    className="cancel"
                  >
                    Cancel
                  </button>

                </div>

              </>

            ) : (

              <>


                <h2>
                  {item.name}
                </h2>


                <p>
                  Priority:
                  <strong>
                    {" "}{item.priority}
                  </strong>
                </p>


                <p>
                  Status:
                  <strong>
                    {" "}{item.status}
                  </strong>
                </p>



                <div className="buttons">


                  {item.status === "Pending" && (

                    <button
                      onClick={() =>
                        completeTask(index)
                      }
                      className="complete"
                    >
                      Complete
                    </button>

                  )}

                  <button
                    onClick={() =>
                      startEdit(index)
                    }
                    className="edit"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteTask(index)
                    }
                    className="delete"
                  >
                    Delete
                  </button>

                </div>

              </>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;