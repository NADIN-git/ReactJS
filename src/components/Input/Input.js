import React from 'react';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
    <div>
      <form className="Message_border Left_right" onSubmit={messageSubmit}>
        <TextField
          color='primary'
          fullWidth
          required
          autoFocus
          placeholder={ props.placeholder }
          value={inputValue}
          onChange={messageUpdate}
          margin="normal"
          variant="filled"
        />
        <Button
          type="submit"
          style={{ margin: '20px' }}
          variant="contained"
          color="primary"
          > { props.nameButton }
        </Button>
      </form>
    </div>
  );
}

export default Input;
