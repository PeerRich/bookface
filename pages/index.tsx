import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}),
);

export default function Index() {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <div className="backgroundLeft">
    </div>
    <div className="backgroundRight">
    </div>
    <Paper />
  </div>
  );
}
