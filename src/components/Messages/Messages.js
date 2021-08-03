import React from 'react'
import Input from '../Input/Input'
import { Redirect, useParams } from 'react-router'
import { AUTHORS } from '../App/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, addMessageWithThunk } from '../../store/messages/actions'
import List from '@material-ui/core/List';
import { useIsChatExists } from '../../hooks/useIsChatExists'
import { getMesages } from "../../store/messages/selectors";


const Messages = (props) => {
  const { chatId } = useParams()
  const dispatch = useDispatch()
  const messageList = useSelector(getMesages({ chatId }));

  const handleMessageSubmit = (newMessageText) => {
    dispatch(
      addMessage(chatId, {
        id: `message${Date.now()}`,
        author: AUTHORS.NADIN,
        text: newMessageText,
      })
    )    
    dispatch(addMessageWithThunk(chatId, {
      id: `message${Date.now()}`,
      author: AUTHORS.MARI,
      text: "Привет",
    })
  )    
  }

  //const onAddMessage = useCallback((message) => {
  //    dispatch(addMessageWithThunk(chatId, message));
  //  }, [chatId, dispatch]);  



  const isChatExists = useIsChatExists({ chatId })

  if (!isChatExists) {
    return <Redirect to="/chats" />
  }

  return (
    <div>
      <div className="Menu_dz3">
        <Input className="Message_border"
          onSubmit={handleMessageSubmit}
          nameButton="Отправить"
          label="Имя чата"
          placeholder="Введите сообщение"
        />
        <div className="Message_border">
          <List subheader={chatId}>
            {messageList.map(item => (
              <p>{item.author}: {item.text}</p>
            ))}
          </List>
        </div>
      </div>
    </div>
  )
}

export default Messages