import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskFilter = () => {
  const { setFilter } = useContext(TaskContext);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-container mb-4">
      <h5>Filter Tasks</h5>
      <select name="status" onChange={handleFilterChange} className="form-select">
        <option value="">All Statuses</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" onChange={handleFilterChange} className="form-select mt-2">
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        name="dueDate"
        onChange={handleFilterChange}
        className="form-control mt-2"
      />
    </div>
  );
};

export default TaskFilter;
