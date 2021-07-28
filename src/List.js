import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    maxWidth: 752,        
    },
  }));  

  const itemsList = [
    {id: "111", name: "Nadin"},
    {id: "222", name: "Mari"},
    {id: "333", name: "Sergey"},
    {id: "444", name: "Nik"}
  ]

export const AppList = (props) => {
    const classes = useStyles();
    return (
        <List>
            <ListItem button>
                {itemsList.map((item, key) => {
                    return (
                        <div className={classes.root}>
                            <ListItemText primary={item.id} secondary={item.name} />
                            <Divider />
                        </div>)
                })}
            </ListItem>
        </List>
    )
}