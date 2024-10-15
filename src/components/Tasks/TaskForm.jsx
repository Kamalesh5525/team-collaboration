import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { toast } from 'react-toastify';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      status,
      priority,
      dueDate,
    };
    addTask(newTask);
    toast.success("Task added successfully!");
    // Reset form fields
    setTitle('');
    setStatus('In Progress');
    setPriority('Medium');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-light">
      <h3>Create a New Task</h3>
      <input 
        type="text" 
        className="form-control mb-2" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <select className="form-control mb-2" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select className="form-control mb-2" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input 
        type="date" 
        className="form-control mb-2" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        required 
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default TaskForm;
