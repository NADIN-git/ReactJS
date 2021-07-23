import React from 'react'
import Message from '../Message/Message'
import Input from '../Input/Input'
import { AUTHORS } from '../App/Constants'
//import usePrevious from '../../hooks/usePrevious'

function TextMessage(props) {
  return <p>{props.author}: {props.text}</p>
}

const ChatItem = (props) => {
  const [messageList, setMessageList] = React.useState([])

  const timer = React.useRef(null)

  //const prevMessageList = usePrevious(messageList)

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

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleMessageSubmit = (newMessageText) => {
    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { author: AUTHORS.NADIN, text: newMessageText },
    ])
  }

  return (
    <div>
        <div className="Menu_dz3">
          <Input className="Message_border" onSubmit={handleMessageSubmit} />
          <div className="Message_border">
            {messageList.map((message, index) => (
              <TextMessage
                clasname={"Menu_chat"}
                key={index}
                author={message.author}
                text={message.text}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default ChatItem