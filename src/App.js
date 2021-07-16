import React from 'react';
import logo from './logo.svg';
import { AUTHORS } from './Constants'
import './App.css';


function TextMessage(props) {  
  return <p>{props.author}: {props.text}</p>
}


function App() {
  const [messageList, setMessageList] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')


React.useEffect(() => {
  if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.MARI
    ) {
      setTimeout(() => {
                setMessageList((currentMessageList) => [
                    ...currentMessageList,
                    { author: AUTHORS.MARI, text: 'Привет' },
                ])
              },1500)
    }
}, [messageList])

  const messageSubmit = (e) => {
    e.preventDefault();
    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { author: AUTHORS.NADIN, text: inputValue },
    ])
    setInputValue('')       
  };

  const messageUpdate = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Здравствуйте, Мария! <br /> Практическое задание к уроку 2.
        </p>
        <form className="Message_border" onSubmit={messageSubmit}>       
        Текст:
        <input          
          placeholder="Введите сообщение"          
          value={inputValue}
          onChange={messageUpdate}
        />  
        <button>Отправить</button>   
      </form> 
      <div className="Message_out">
      {messageList.map((message, index) => (
      <TextMessage
        key={index}
        author={message.author}
        text={message.text}       
      />
      ))}    
      </div>
          
      </header>
      
    </div>
  );
}

export default App;
