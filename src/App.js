import React from 'react';
import logo from './logo.svg';
import { AUTHORS } from './Constants'
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
 
 const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6170fb",
    },
    secondary: {
      main: "#0098FF",
    },
  },
 });
 

function TextMessage(props) {
  return <p>{props.author}: {props.text}</p>
}

function App() {
  const [messageList, setMessageList] = React.useState([])
  const [chats, setChats] = React.useState([
    { id: 'chat1', name: 'Чат 1' },
    { id: 'chat2', name: 'Чат 2' },
    { id: 'chat3', name: 'Чат 3' },
    { id: 'chat4', name: 'Чат 4' },
  ])
  const [currentChat, setCurrentChat] = React.useState(chats[0])
  const [inputValue, setInputValue] = React.useState('')
  const handleChangeChat = (chat) => setCurrentChat(chat)


  React.useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.MARI
    ) {
      setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList,
          { author: AUTHORS.MARI, text: 'Привет' },
        ])
      }, 1500)
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

  const handleMessageChange = (e) => {
    setInputValue(e.target.value)
}

  return (
    <ThemeProvider theme={theme}>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Здравствуйте, Мария! Практическое задание к уроку 3.
      </p>
      <div className="Menu_dz3">
      <div className="Message_border">
        <List subheader="Список чатов">
          {chats.map((chat) => (
            <ListItem
              button                         
              key={chat.id}
              selected={chat.id === currentChat.id}
              onClick={() => handleChangeChat(chat)}>
              {chat.name}
            </ListItem>
          ))}
        </List>
      </div>
      <form className="Message_border Left_right" onSubmit={messageSubmit}>
        <TextField
          color='primary'
          fullWidth
          required
          autoFocus
          placeholder="Введите сообщение"
          value={inputValue}
          onChange={messageUpdate}         
          margin="normal"
          variant="filled"
        />
        <Button
          type="submit" 
          style={{ margin: '20px' }}
          variant="contained"
          color="primary">
          Отправить
        </Button>
      </form>
      <div className="Message_border">
        {messageList.map((message, index) => (
          <TextMessage
            key={index}
            author={message.author}
            text={message.text}
          />
        ))}
      </div>
      </div>
    </div >
    </ThemeProvider>
  );

}

export default App;
