import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import BadgeAvatars from "./BadgeAvatars";
import {IconButton, InputAdornment} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import FilledInput from "@material-ui/core/FilledInput";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  readAvatar: {
    marginLeft: "-8px",
    marginTop: "-4px",
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  chatContent: {
    whiteSpace: "normal",
    display: "flex",
    flexDirection: "column",
  },
  bubbleWrapper: {
    padding: 8
  },
  time: {
    display: "block",
    width: "100%",
    textAlign: "center",
    padding: 8,
    opacity: 0.3,
    fontWeight: "bold"
  },
  bubble: {
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    padding: 8,
  },
  bubbleOwner: {
    backgroundColor: "#268bd2",
    borderRadius: 16,
    padding: 8,
    color: "#fff",
  },
  messengerInputWrapper:{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%"
  }
}),
);

export default function Messenger(props: any) {
  const classes = useStyles();

  return (<>
    <List dense={true} style={{padding: "0px 0 0px 8px", boxShadow: "0 2px 1px rgba(0, 0, 0, .1)"}}>
      <ListItem disableGutters>
        <ListItemAvatar style={{minWidth: 42}}>
          <BadgeAvatars status="online">
            <Avatar className={classes.small}
                    src="https://bookface-images.s3.amazonaws.com/avatars/1b324f828a6542f5a943c4bbb3c945adb3e45969.jpg?1546203626"
                    alt="Malte Delfs"/>
          </BadgeAvatars>
        </ListItemAvatar>
        <ListItemText
        primary="Malte Delfs"
        secondary="Mage (W19)"
        />
        {props.buttons}
      </ListItem>
    </List>

    <div className={classes.chatContent}>
      <small className={classes.time}>
        Tue 14. April – 6:10 pm
      </small>
      <div className={classes.bubbleWrapper}>
        <span className={classes.bubble} style={{borderBottomLeftRadius: 0}}>
        Yo this is dope 🎉
        </span>
      </div>
      <div className={classes.bubbleWrapper}>
        <span className={classes.bubble} style={{borderTopLeftRadius: 0}}>
          now I don't need to use WhatsApp
        </span>
      </div>
      <small className={classes.time}>
        Wed 15. April – 2:10 pm
      </small>
      <div className={classes.bubbleWrapper} style={{alignSelf: "flex-end"}}>
        <span className={classes.bubbleOwner}>
          right?! 😍
        </span>
        <Avatar className={classes.readAvatar}
                src="https://bookface-images.s3.amazonaws.com/avatars/1b324f828a6542f5a943c4bbb3c945adb3e45969.jpg?1546203626"
                alt="Malte Delfs"/>
      </div>
      <div className={classes.bubbleWrapper}>
        <span className={classes.bubble} style={{borderBottomLeftRadius: 0}}>
          oh you can even do video calls
        </span>
      </div>
      <div className={classes.bubbleWrapper}>
        <span className={classes.bubble} style={{borderTopLeftRadius: 0}}>
          that's pretty slick
        </span>
      </div>
      <div className={classes.messengerInputWrapper}>
        <FormControl style={{width: "100%"}}>
          <FilledInput
          className="messengerFilledInput"
          fullWidth
          placeholder="Write your message ..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton style={{marginRight: -10}}>
                <SendIcon fontSize="small"/>
              </IconButton>
            </InputAdornment>
          }
          />
        </FormControl>
      </div>
    </div>
  </>
  );
}
