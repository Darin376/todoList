import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { HomePage } from "./components/HomePage/HomePage";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { TodoList } from "./components/TodoList/TodoList";
import { useDispatch } from 'react-redux';
import {  postLoad } from "./Redux/actions";
import {  useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postLoad());
}, []);
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/todoList' element={<TodoList/>} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;