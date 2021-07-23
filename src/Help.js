return ( 
  <div className="App">
    <header>
    <form onSubmit={messageSubmit}>                  
      <TextField   
        style={{ margin: '20px' }}              
        borderColor="red"
        color="green"
        fullWidth
        required
        autoFocus        
        placeholder="Введите сообщение"          
        value={inputValue}
        onChange={messageUpdate}
      />  
      <Button
        style={{ margin: '20px' }}
        variant="contained"
        color="primary">        
        Отправить
      </Button>
    </form>      
    <div>
      {messageList.map((message, index) => (
        <TextMessage
        key={index}
        author={message.author}
        text={message.text}
        />        
      ))}    
    </div> 
    </header>


    
  </div>
);

export const AppList = (props) => {
  return (
      <List>
          { props.items.map((item, key) => {
              return <ListItem
               primaryText={ item.id }
               secondaryText={ item.name }
              />
          })}            
      </List>
  )
}