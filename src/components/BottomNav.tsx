import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/Email';
import ForumIcon from "@material-ui/icons/Forum";
import Router, {useRouter} from "next/router";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const router = useRouter();

  let initVal = 0;

  switch (router.pathname) {
    case '/forum':
      initVal = 0;
      break;
    case '/messages':
      initVal = 1;
      break;
    case '/account':
      initVal = 2;
      break;
    default:
      initVal = 2;
  }

  const [value, setValue] = React.useState(initVal);


  return (
  <div className="bottomAppBarWrapper">
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
      console.log(event)
    }}
    showLabels
    className={classes.root}
    >
      <BottomNavigationAction onClick={() => Router.push("/channels")} label="Forum" icon={<ForumIcon/>}/>
      <BottomNavigationAction onClick={() => Router.push("/messages")} label="Messages" icon={<InboxIcon/>}/>
      <BottomNavigationAction onClick={() => Router.push("/account")} label="Account" icon={<PersonIcon/>}/>
    </BottomNavigation>
  </div>
  );
}
