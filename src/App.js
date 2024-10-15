import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import TaskProvider from './context/TaskContext';
import ChatProvider from './context/ChatContext';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Chat from './components/Chat/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import "./App.css"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AuthProvider>
    <TaskProvider>
      <ChatProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <ToastContainer position='top-center' />
      </ChatProvider>
    </TaskProvider>
  </AuthProvider>
  );
};

export default App;
