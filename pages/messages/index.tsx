import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import BadgeAvatars from "../../src/components/BadgeAvatars";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Root from "../../src/components/Root";
import Router from "next/router";

export default function Index() {
  return (
  <Root>
    <div style={{
      flexShrink: 0,
      whiteSpace: 'nowrap',
      margin: "-32px -24px",
    }}>
      <List onClick={() => Router.push("/messages/chat")}>
        <ListItem alignItems="flex-start" button onClick={() => console.log()}>
          <ListItemAvatar>
            <BadgeAvatars status="online">
              <Avatar style={{marginTop: 8}} alt="Remy Sharp"
                      src="https://bookface-images.s3.amazonaws.com/avatars/1b324f828a6542f5a943c4bbb3c945adb3e45969.jpg?1546203626"/>
            </BadgeAvatars>
          </ListItemAvatar>
          <ListItemText
          primary="that's pretty slick"
          secondary={
            <React.Fragment>
              <Typography
              style={{display: 'inline'}}
              component="span"
              variant="body2"
              color="textPrimary"
              >
                Malte Delfs
              </Typography>
              — Mage (W19)
            </React.Fragment>
          }
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
        <ListItem alignItems="flex-start" button onClick={() => console.log()}>
          <ListItemAvatar>
            <BadgeAvatars status="offline">
              <Avatar style={{marginTop: 8}} alt="Remy Sharp"
                      src="https://bookface-images.s3.amazonaws.com/avatars/d8621183e71fe34a93a47bec7e5b45c5cafd0253.jpg?1515222354"/>
            </BadgeAvatars>
          </ListItemAvatar>
          <ListItemText
          primary="Wow, love the redesign! ..."
          secondary={
            <React.Fragment>
              <Typography
              style={{display: 'inline'}}
              component="span"
              variant="body2"
              color="textPrimary"
              >
                Paul Graham </Typography>
              — Y Combinator
            </React.Fragment>
          }
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
        <ListItem alignItems="flex-start" button onClick={() => console.log()}>
          <ListItemAvatar>
            <BadgeAvatars status="busy">
              <Avatar style={{marginTop: 8}} alt="Remy Sharp"
                      src="/confused-meme.png"/>
            </BadgeAvatars>
          </ListItemAvatar>
          <ListItemText
          primary="How did I get here?"
          secondary={
            <React.Fragment>
              <Typography
              style={{display: 'inline'}}
              component="span"
              variant="body2"
              color="textPrimary"
              >
                Nick Young
              </Typography>
              — NBA
            </React.Fragment>
          }
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
        <ListItem alignItems="flex-start" button onClick={() => console.log()}>
          <ListItemAvatar>
            <BadgeAvatars status="busy">
              <Avatar style={{marginTop: 8}} alt="Remy Sharp"
                      src="/cat.jpg"/>
            </BadgeAvatars>
          </ListItemAvatar>
          <ListItemText
          primary="Can I haz some music?"
          secondary={
            <React.Fragment>
              <Typography
              style={{display: 'inline'}}
              component="span"
              variant="body2"
              color="textPrimary"
              >
                Keyboard Cat
              </Typography>
              — Meme Corp
            </React.Fragment>
          }
          />
        </ListItem>
      </List>
    </div>
  </Root>
  );
}
