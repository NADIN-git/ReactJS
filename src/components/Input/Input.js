import React from 'react';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6170fb",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

const Input = (props) => {
  const { onSubmit } = props
  const [inputValue, setInputValue] = React.useState('')
  
  const messageSubmit = (e) => {
    e.preventDefault()

    if (onSubmit) {
        onSubmit(inputValue)
        setInputValue('')
    }
}

  const messageUpdate = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <form className="Message_border Left_right" onSubmit={messageSubmit}>
          <TextField
            color='primary'
            fullWidth
            required
            autoFocus
            placeholder="Введите сообщение"
            value={inputValue}
            onChange={messageUpdate}
            margin="normal"
            variant="filled"
          />
          <Button
            type="submit"
            style={{ margin: '20px' }}
            variant="contained"
            color="primary">
            Отправить
          </Button>
        </form>
      </div >
    </ThemeProvider>
  );
}

export default Input;
