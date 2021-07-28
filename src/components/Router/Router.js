import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App/App.css'
import Home from '../App/Home'
//import Chat from '../Chat/Chat'
import Chats from '../Chats/Chats'
import ChatItem from '../Chats/ChatItem'
import Profile from '../Profile/Profile'

export default function Router() {
    const menuChats = [
        { id: 'chat1', path: "/chat1", comp: ChatItem, name: 'Чат 1' },
        { id: 'chat2', path: "/chat2", comp: ChatItem, name: 'Чат 2' },
        { id: 'chat3', path: "/chat3", comp: ChatItem, name: 'Чат 3' },
        { id: 'chat4', path: "/chat4", comp: ChatItem, name: 'Чат 4' },
    ]
    return (

        <div className="App-header">
            <div className="bordered">
                <Link to="/" className="Message_chats">Home</Link>                
                <Link to="/chats" className="Message_chats">Chats</Link>                
                <Link to="/profile" className="Message_chats">Profile</Link>
            </div>

            <Switch>
                <Route path="/" exact component={Home} />                

                <Route path="/chats" component={Chats} />                

                <Route path="/profile" component={Profile} />                 
               
                    {menuChats.map(item => 
                        <Route exact path={item.path} component={ item.comp } />
                    )}
               
                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>

    )
}