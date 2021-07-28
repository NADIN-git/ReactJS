import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'

const Chats = () => {
  const menuChats = [
    { id: 'chat1', path: "/chat1", name: 'Чат 1' },
    { id: 'chat2', path: "/chat2", name: 'Чат 2' },
    { id: 'chat3', path: "/chat3", name: 'Чат 3' },
    { id: 'chat4', path: "/chat4", name: 'Чат 4' },
  ]

  return (
    <div className = "Menu_dz3">
      <div className="Menu_chat">
        <List subheader="Список чатов">
          {menuChats.map(item => (
            <ListItem>
              <Link to={item.path}>{item.name}</Link>
            </ListItem>
          ))}
        </List>        
      </div>
    </div>
  );
}

export default Chats;
