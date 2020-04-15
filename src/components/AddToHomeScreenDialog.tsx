import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {DialogContent, DialogContentText, SvgIcon} from "@material-ui/core";

const selectedVal = ['', ''];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const {onClose, selectedValue, open} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  if (!window.matchMedia('(display-mode: standalone)').matches) {
    return (
    <Dialog maxWidth="xs" style={{textAlign: "center"}} onClose={handleClose} aria-labelledby="simple-dialog-title"
            open={open}>
      <DialogTitle id="simple-dialog-title">
        <img style={{
          margin: "0 auto",
          borderRadius: 10,
          width: 50,
          height: 50,
          display: "block",
        }} src="/yc.png"/>
        <strong style={{fontSize: "22px", lineHeight: "52px"}} className="brand">Bookface</strong>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Add this app to your home screen for easy access and a better experience.
          <br/>
          <br/>
          <strong style={{color: "#3f50b5"}}>Tap
            <SvgIcon style={{
              height: 30,
              width: 35,
              top: 10,
              position: "relative"
            }} viewBox="0 0 50 50">
              <path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"/>
              <path d="M24 7h2v21h-2z"/>
              <path
              d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/>
            </SvgIcon>
            then 'Add to Home Screen'</strong>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    )
  } else return <div/>;
}

export default function AddToHomeScreenDialog() {
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState(selectedVal[1]);

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}/>);
}
