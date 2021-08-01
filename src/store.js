import { combineReducers, createStore } from 'redux'
import profileReducer from './store/profile/reducer'
import chatsReducer from './store/chats/reducer'
import messageReducer from './store/messages/reducer'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)