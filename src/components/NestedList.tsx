import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


export default function NestedList(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
  <List>
    <ListItem button onClick={handleClick}>
      {props.icon}
      <ListItemText primary={props.title}/>
      {open ? <ExpandLess/> : <ExpandMore/>}
    </ListItem>
    <Collapse style={{backgroundColor: "rgba(0,0,0,0.02)"}} in={open} timeout="auto" unmountOnExit>
      {props.children}
    </Collapse>
  </List>
  );
}
