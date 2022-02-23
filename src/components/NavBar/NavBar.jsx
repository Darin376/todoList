import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBarStyle.css";

export const NavBar = () => {
    return <div className='navBarWrapper' >
        <div className='navBarContent'>
            <span>
            <Link to="/">HomePage</Link>
            </span>
            <span>
            <Link to="/todoList">TodoList</Link>
            </span>
        </div>
    </div>
}