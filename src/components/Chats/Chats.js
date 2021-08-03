import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { addChat } from '../../store/chats/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { getChats } from "../../store/chats/selectors";


const Chats = () => {

  const history = useHistory()

  const chats = useSelector(getChats);

  const dispatch = useDispatch()

  const handleAddChat = (name) => {
    dispatch(addChat(`chat${Date.now()}`, name))
  }

  const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`)
  }

  return (
    <div className="Menu_dz3">
      <div className="Menu_chat">
        <List subheader={<p>Список чатов</p>}>
          {Object.values(chats).map((chat) => (
            <div className="chats__sidebar__item" key={chat.id}>
              <ListItem
                button
                component="a"
                onClick={() => handleChatLinkClick(chat)}
              >
                {chat.name}
              </ListItem>

            </div>
          ))}
        </List>
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
