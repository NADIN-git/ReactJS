import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App/App.css'
import Home from '../App/Home'
import Chats from '../Chats/Chats'
import Messages from '../Messages/Messages'
import Profile from '../Profile/Profile'
import News from '../News/News'
import Login from '../Login'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsAuthed } from '../../store/profile/Actions'

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> :
        <div><p className="Message_border Left_right Message_alignment">
            <br /> Для доступа к разделу
            <br /> войдите в свою учетную запись !
            <br /> &nbsp; </p></div>
}

export default function Router() {

    const dispatch = useDispatch()

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })

            dispatch(changeIsAuthed(Boolean(user)))
        })
    }, [])

    return (
        <div className="App-header">

            <div className="bordered">
                <Link to="/" className="Message_chats">Домашняя страница</Link>
                <Link to="/chats" className="Message_chats">Чаты</Link>
                <Link to="/profile" className="Message_chats">Профиль</Link>
                <Link to="/news" className="Message_chats">Новости</Link>
                <Link to="/login" className="Message_chats">Вход в учетную запись</Link>
            </div>

            <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/chats" exact component={Chats} />
                <PrivateRoute path="/chats/:chatId" component={Messages} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/news" component={News} />
                <Route path="/login" component={Login} />
                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>

    )
}