import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InboxIcon from '@material-ui/icons/Email';
import ForumIcon from "@material-ui/icons/Forum";
import Router, {useRouter} from "next/router";
import PersonIcon from "@material-ui/icons/Person";
import Drawer from "@material-ui/core/Drawer/Drawer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: 70,
  },
  tab: {
    paddingBottom: 20
  },
  fullList: {
    width: 'auto',
  },
});

export default function BottomNav(props: any) {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };


  let initVal = 0;

  function containsUrl(term: string) {
    return router.pathname.includes(term);
  }
  switch (true) {
    case containsUrl("/channels"):
      initVal = 0;
      break;
    case containsUrl("/messages"):
      initVal = 1;
      break;
    case containsUrl("/account"):
      initVal = 2;
      break;
    default:
      initVal = 2;
  }

  const [value, setValue] = React.useState(initVal);


  return (<>
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
      console.log(event);
    }}
    showLabels
    className={classes.root}
    >
      <BottomNavigationAction className={classes.tab} onClick={() => Router.push("/channels")} label="Forum"
                              icon={<ForumIcon/>}/>
      <BottomNavigationAction className={classes.tab} onClick={() => Router.push("/messages")} label="Messages"
                              icon={<InboxIcon/>}/>
      <BottomNavigationAction className={classes.tab} onClick={toggleDrawer(true)} label="Account"
                              icon={<PersonIcon/>}/>
    </BottomNavigation>
    <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {props.children}
    </Drawer>
  </>
  );
}
