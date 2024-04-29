import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{display:'flex',gap:'20px',justifyContent:'center'}}>
        <div>
          <NavLink to='/' style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'grey'  // Red when active, grey otherwise
          })}
           >Home</NavLink>
        </div>
        <div>
        <NavLink to='/details' style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'grey'  // Red when active, grey otherwise
          })}
           >details</NavLink>
        </div>
        <div>
        <NavLink to='/about' style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'grey'  // Red when active, grey otherwise
          })}
           >about</NavLink>
        </div>
        <div>
        <NavLink to='/signin' style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : 'grey'  // Red when active, grey otherwise
          })}
           >signin</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
