import React from 'react';
import Root from "../../src/components/Root";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

export default function Company() {
  return (
  <>
    <Root>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          >
            <MenuIcon/>
          </IconButton>
          <Link href="/channels" as="/channels">
            <img style={{marginRight: -3, zIndex: 1}}
                 src="/yc.png"
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
