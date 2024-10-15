import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/register')
  };

  return (
    <header className="header " >
      <h1 className='bg-primary'>Team Collaboration Hub</h1>
      {user ? (
        <div style={{backgroundColor:"#CDE8E5"}}>
          <span >Welcome, {user.email}</span>
          <button onClick={handleLogout} className='bg-info border-3 border-black ms-3' style={{borderRadius:"5px"}}>Logout</button>
        </div>
      ) : (
        <div className='justify-content-end d-flex'>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
