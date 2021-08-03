//import { AUTHORS } from '../../components/App/Constants'
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message,
  },
})

export const addMessageWithThunk = (chatId, message) => {
  return (dispatch, getState) => {
    console.log(getState())

    setTimeout(() => {
      dispatch(addMessage(chatId, message))
    }, 1000)
  }
}