import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { addChatToDatabase, removeChatFromDatabase, subscribeChatsChangings } from '../../store/chats/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { getChats } from "../../store/chats/Selectors";
import { Button } from "@material-ui/core";
//import { IconButton } from '@material-ui/core';
//import { Delete } from '@material-ui/core';
const Chats = () => {

  const history = useHistory()

  const chats = useSelector(getChats);

  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(subscribeChatsChangings())
  }, [])

  const handleAddChat = (name) => {
    dispatch(addChatToDatabase(`chat${Date.now()}`, name))
  }

  const handleRemoveChat = (chatId) => {
    dispatch(removeChatFromDatabase(chatId))
  }

  const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`)
  }

  return (
    <div className="Menu_dz3">
      <div>
        <div className="Message_border">
          <List subheader={<p>Список чатов</p>}>
            {Object.values(chats).map((chat) => (
              <div className="app__form" key={chat.id}>
                <ListItem
                  button
                  component="a"
                  onClick={() => handleChatLinkClick(chat)}
                >
                  {chat.name}                  
                </ListItem>
                <Button
                    onClick={() => handleRemoveChat(chat.id)}
                    style={{ margin: '20px' }}
                    variant="contained"
                    color="primary">
                    Удалить
                  </Button>
              </div>
            ))}
          </List>
        </div>
      </div>
      <Input
        nameButton="Добавить чат"
        label="Имя чата"
        placeholder="Введите имя чата"
        onSubmit={handleAddChat}>
      </Input>
    </div>
  );
}

export default Chats;