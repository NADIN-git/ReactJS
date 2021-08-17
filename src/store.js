//import { combineReducers, createStore } from 'redux'
import profileReducer from './store/profile/Reducer'
import chatsReducer from './store/chats/Reducer'
import messageReducer from './store/messages/Reducer'
import newsReducer from './store/news/Reducer'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
    news: newsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(    
    persistedReducer,    
    composeEnhancers(applyMiddleware(thunk))    
)

export const persistor = persistStore(store);
