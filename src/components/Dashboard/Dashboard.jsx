import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import TaskForm from '../Tasks/TaskForm';
import TaskList from '../Tasks/TaskList';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="container">
      <header className="header text-center" style={{borderRadius:"20px"}}>
        <h1 style={{backgroundColor:"#6B8A7A"}}>Welcome, {user?.email || 'User'}</h1>
      </header>
      <div className="row justify-content-center">
        <section className="task-management col-md-8">
          <h2>Manage Tasks</h2>
          <TaskForm />
          <TaskList /> {/* Render TaskList here */}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
