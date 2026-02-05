import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate()
  const[tasks, setTasks] = useState([])

  useEffect(()=>{
    console.log('called after API',tasks)
  },[tasks])
  useEffect(()=>{
    fetchData();
  },[])
   

  const fetchData =async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error)
    }
  };

  const handleLogout = () =>{
    // console.log('click from dashboard')
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/login')
  }

  return (
    <div>

      <NavBar title="Task Management" onLogout={handleLogout}/>
      <h1>MY TASKS</h1>
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default Dashboard;
