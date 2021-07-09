import React from 'react';
import logo from './logo.svg';
import './App.css';

class MessageClass extends React.Component {
  render () {
    return <p className="MessageClass_border">MessageClass - {this.props.text} <br />{this.props.text1}</p>    
  }
}

function Message (props) {
  console.log({ props })
  return <p className="Message_border">Message - {props.text} <br />{props.text1}</p>  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      <img src={logo} className="App-logo" alt="logo" />      
        <p>
          Здравствуйте, Мария! <br /> Практическое задание к уроку 1.
        </p>
        <Message text={"Применяю функциональный компонент!"} text1={"Добавляю text1"}/>
        <MessageClass text={"Применяю классовый компонент!"} text1={"Добавляю text1"}/>
      </header>
    </div>
  );
}

export default App;
