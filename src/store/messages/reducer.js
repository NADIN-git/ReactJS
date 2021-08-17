import { ADD_MESSAGE } from "./Actions";

const initialState = {}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
        return {
            ...state,
            [action.payload.chatId]: [
                ...(state[action.payload.chatId] || []),
                action.payload.message,
            ],
        }
    }
    default:
        return state
  }
};

export default messagesReducer;