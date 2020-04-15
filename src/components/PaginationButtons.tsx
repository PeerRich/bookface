import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  paginationWrapper: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 1201,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center"
  }
}));

export default function PaginationButtons() {
  const classes = useStyles();

  return (
  <div className={classes.paginationWrapper}>
    <Paper className="paginationPaperHover">
      <div className={classes.root}>
        <Pagination count={5} color="secondary" showFirstButton showLastButton/>
      </div>
    </Paper>
  </div>
  );
}
