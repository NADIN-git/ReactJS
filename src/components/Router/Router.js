import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App/App.css'
import Home from '../App/Home'
import Chats from '../Chats/Chats'
import Messages from '../Messages/Messages'
import Profile from '../Profile/Profile'

export default function Router() {
    return (
        <div className="App-header">
            <div className="bordered">
                <Link to="/" className="Message_chats">Home</Link>
                <Link to="/chats" className="Message_chats">Chats</Link>
                <Link to="/profile" className="Message_chats">Profile</Link>
            </div>

            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/chats" exact component={Chats} />

                <Route path="/chats/:chatId" component={Messages} />

                <Route path="/profile" component={Profile} />


                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>

    )
}