import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/AnimatedBackground.css";

function App() {

      const [tasks, setTasks] = useState([]);

      useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
      }, []);

      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

      const addTask = (text, date, priority) => {
        setTasks([...tasks, { 
          id: Date.now(), 
          text, 
          completed: false,
          date,
          priority 
        }]);
      };

      const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
      };

      const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

      const reorderTasks = (newTasks) => {
        setTasks(newTasks);
      };

  return (
    <>
      <div className="animated-background"></div>
      <Header />
      <div style={{ fontFamily: 'Vazir' }} className="max-w-200 mx-auto mt-24 p-6 border rounded-lg shadow-md bg-gray-100 bg-opacity-80 backdrop-blur-sm">
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} onReorder={reorderTasks} />
      </div>
      <Footer />
    </>
  )
}

export default App
