import { useState } from "react";
import { FaTrash } from "react-icons/fa";
export const ToDo = () => {
  const [tasks, setTasks] = useState([]);



 const addTask = () => {
   const text = prompt("Enter new task");

   if (text) {
     const newTask = {
       id: Date.now(),
       text: text,
       done: false,
     };

     setTasks([...tasks, newTask]);
   }
 };
      
       const deleteTask = (idToDelete) => {
         setTasks(tasks.filter((task) => task.id !== idToDelete));
       };  
      
    const toggleTask = (idToToggle) => {
setTasks(
  tasks.map((task) =>
    task.id === idToToggle ? { ...task, done: !task.done } : task,
  ),
);
    }



  

  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />{" "}
            <span style={{ marginLeft: "8px", marginRight: "8px" }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};
