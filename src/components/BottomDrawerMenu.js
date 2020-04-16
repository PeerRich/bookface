import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  tab: {
    paddingBottom: 20
  }
});


export default function BottomDrawerMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const list = () => (
  <div
  className={classes.list}
  role="presentation"
  onClick={toggleDrawer(false)}
  onKeyDown={toggleDrawer(false)}
  >
    {props.children}
  </div>
  );

  return (<>
    <BottomNavigationAction className={classes.tab} onClick={toggleDrawer(true)} label="Account"
                            icon={<PersonIcon/>}/>
    <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  </>
  );
}
