import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Await, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate()
  const[tasks, setTasks] = useState([])

  useEffect(()=>{
    console.log("called after API",tasks);
  },[tasks]);
  useEffect(()=>{
    fetchData();
  },[]);
   

  const fetchData =async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.JSON();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () =>{
    // console.log('click from dashboard')
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/login')
  }

  const handleAddTask= async(newTask)=>{
    const tasktoAdd = {...newTask,completed:false}
    try{
      const response=await fetch("http://localhost:3000/tasks",{
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(tasktoAdd)
      });
      console.log(tasktoAdd)
      const data = await response.json();
      setTasks([...tasks,data])
    }catch (error){
      console.log(error)
    }
    
  }

  return (
    <div>

      <NavBar title="Task Management" onLogout={handleLogout}/>
     
      <h1>MY TASKS</h1>
    <TaskList tasks={tasks}/>
       <TaskForm addTask={handleAddTask}/>
    </div>
  );
};

export default Dashboard;
