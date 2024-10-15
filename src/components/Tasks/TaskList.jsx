import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedStatus, setUpdatedStatus] = useState('In Progress');
  const [updatedPriority, setUpdatedPriority] = useState('Medium');
  const [updatedDueDate, setUpdatedDueDate] = useState('');

  const handleEdit = (task) => {
    setEditingTask(task);
    setUpdatedTitle(task.title);
    setUpdatedStatus(task.status);
    setUpdatedPriority(task.priority);
    setUpdatedDueDate(task.dueDate);
  };

  const handleUpdate = () => {
    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: updatedTitle,
        status: updatedStatus,
        priority: updatedPriority,
        dueDate: updatedDueDate,
      };
      updateTask(updatedTask);
      toast.success("Task updated successfully!");
      setEditingTask(null); // Clear editing state
      // Reset fields after update
      setUpdatedTitle('');
      setUpdatedStatus('In Progress');
      setUpdatedPriority('Medium');
      setUpdatedDueDate('');
    }
  };

  const handleDelete = (id) => {
    deleteTask(id);
    toast.error("Task deleted successfully!");
  };

  return (
    <div>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4 mb-3" key={task.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">Status: {task.status}</p>
                <p className="card-text">Priority: {task.priority}</p>
                <p className="card-text">Due Date: {task.dueDate}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleEdit(task)} 
                  data-bs-toggle="modal" 
                  data-bs-target="#editTaskModal"
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Task Modal */}
      <div 
        className="modal fade" 
        id="editTaskModal" 
        tabIndex="-1" 
        aria-labelledby="editTaskModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editTaskModalLabel">Edit Task</h5>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                onClick={() => setEditingTask(null)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Task Title"
                required
              />
              <select 
                className="form-select mb-2" 
                value={updatedStatus} 
                onChange={(e) => setUpdatedStatus(e.target.value)}
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <select 
                className="form-select mb-2" 
                value={updatedPriority} 
                onChange={(e) => setUpdatedPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <input
                type="date"
                className="form-control mb-2"
                value={updatedDueDate}
                onChange={(e) => setUpdatedDueDate(e.target.value)}
                required
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal" 
                onClick={() => setEditingTask(null)}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleUpdate} 
                data-bs-dismiss="modal"
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
