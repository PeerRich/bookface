import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import VideoCallFrame from "./VideoCallFrame";

export default function VideoDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <span style={{margin: "0px 8px"}}>
    <IconButton size="small" onClick={handleClickOpen}>
      {props.button}
    </IconButton>
    <Dialog
    maxWidth="xl"
    style={{margin: 8}}
    fullWidth
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <VideoCallFrame url="https://emojitalki.daily.co/yc" />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          End Call
        </Button>
      </DialogActions>
    </Dialog>
  </span>
  );
}
