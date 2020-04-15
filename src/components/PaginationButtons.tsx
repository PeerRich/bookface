import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paginationWrapper: {
    marginTop: 40,
    position: "relative",
    bottom: -40,
    maxWidth: 400,
    width: "100%",
    left: "50%",
    marginLeft: -200,
    display: "flex",
    justifyContent: "center"
  },
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
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
