import React from 'react';
import {AppBar, createStyles, Theme} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Root from "../src/components/Root";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#222",
  },
}));

export default function Companies() {
  const classes = useStyles();

  return (
  <>
    <Root>
      <AppBar className={classes.appBar} style={{position: "relative"}}>
        <Toolbar style={{padding: 0}}>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          >
            <MenuIcon/>
          </IconButton>
          <Link href="/channels" as="/channels">
            <img style={{marginRight: -3, zIndex: 1}}
                 src="https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png"
                 height={35}/>
          </Link>
          <Typography variant="body2" style={{lineHeight: "64px", padding: "0px 8px", fontWeight: "bold"}}>
            Peer
          </Typography>
        </Toolbar>
      </AppBar>
    </Root>
  </>
  );
}
