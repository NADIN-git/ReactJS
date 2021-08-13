import React from 'react';
import logo from './logo.svg';
import './App.css';

export const Home = () => {
  return (
    <div className="App-home">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Здравствуйте, Мария! Практическое задание к уроку 9.
      </p>
    </div>
  )
}

export default Home