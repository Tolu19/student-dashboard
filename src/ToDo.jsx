import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./ToDo.module.css";
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
    <div className={styles.card}>
      <h2>My Tasks</h2>
      <ul className={styles.item}>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className={styles.taskText}>{task.text}</span>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteTask(task.id)}
            >
              <FaTrash className={styles.icon} />
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.addbtn} onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};
