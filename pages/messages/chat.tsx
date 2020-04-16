import React from 'react';
import Root from "../../src/components/Root";
import Messenger from "../../src/components/Messenger";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/core/SvgIcon/SvgIcon";
import VideoDialog from "../../src/components/VideoDialog";
import VideoIcon from '@material-ui/icons/Videocam';

export default function Chat() {
  return (
  <>
    <Root>
      <div style={{margin: "-22px"}}>
        <Messenger buttons={
          <ListItemSecondaryAction>
            <IconButton href="mailto:person@example.com" size="small" edge="end" aria-label="email">
              <MailIcon/>
            </IconButton>
            <VideoDialog button={<VideoIcon/>}/>
          </ListItemSecondaryAction>
        }/>
      </div>
    </Root>
  </>
  );
}
