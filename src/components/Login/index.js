import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useSelector } from 'react-redux'
import { Button } from "@material-ui/core";

export default function Login(props) {
  const isAuthed = useSelector((state) => state.profile.isAuthed)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [isSigningUp, setIsSigningUp] = React.useState(false)

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)
  const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked)

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSignOut = (e) => {
    e.preventDefault()

    firebase.auth().signOut()
  }

  const handleSignUp = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSubmit = () => {
    if (!email || !password) {
      setError('Заполните поля')
      return
    }
    handleLogin()
  }

  return (
    <div>
      <div className="Message_border Left_right Message_alignment"
        style={{
          alignItems: 'center',
        }}
      >
        {!isAuthed ?
          <div>
            <p>Для входа в учетную запись <br /> введите логин и пароль</p>
            <div>
              <TextField
                className="Message_border"
                placeholder="e_mail"
                value={email}
                type="email"
                onChange={handleChangeEmail}
                color='primary'
                fullWidth
                required
                autoFocus
                margin="normal"
                variant="filled"
              />
              <TextField
                className="Message_border"
                variant="outlined"
                placeholder="Пароль"
                value={password}
                type="text"
                onChange={handleChangePassword}
                color='primary'
                fullWidth
                required
                margin="normal"
                variant="filled"
              />
            </div>
          </div>
          :
          <p>Ваша учетная запись активирована</p>}
        {!isAuthed ?
          <div>
            <Button
              onClick={handleSubmit}
              style={{ margin: '20px' }}
              variant="contained"
              color="primary">
              Войти
            </Button>
            <Button
              onClick={handleSignUp}
              style={{ margin: '20px' }}
              variant="contained"
              color="primary">
              Создать новую учетную запись
            </Button>
            <hr />
            <p className="Message_error">{error}</p>
          </div>
          :
          <div>
            <Button
              onClick={handleSignOut}
              style={{ margin: '20px' }}
              variant="contained"
              color="primary">
              Выйти из учетной записи
            </Button>
          </div>
        }
      </div>
    </div >
  )
}