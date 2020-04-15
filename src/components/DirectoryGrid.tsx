import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CallIcon from '@material-ui/icons/Call';
import InboxIcon from '@material-ui/icons/Email';
import {Tooltip} from "@material-ui/core";
import PaginationButtons from "./PaginationButtons";

const useStyles = makeStyles(() =>
createStyles({
  root: {
    flexGrow: 1,
  },
  item: {
    minWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '70%',
  },
}),
);


export default function DirectoryGrid(props: any) {
  const classes = useStyles();

  const content = props.data.map((data: any) =>
  <Grid key={data.id} item xs className={classes.item}>
    <Card className={classes.root}>
      <CardHeader
      avatar={
        <Avatar aria-label="company" src={data.companyLogo}/>
      }
      title={data.name}
      subheader={data.title + " at " + data.company}
      />
      <CardMedia
      className={classes.media}
      image={"https://source.unsplash.com/featured/?" + data.name}
      />
      <CardActions disableSpacing>
        <Tooltip title={data.email} aria-label="person@example.com">
          <IconButton aria-label="email">
            <InboxIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title="+1 123 456 789" aria-label="person@example.com">
          <IconButton aria-label="mobile">
            <CallIcon/>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  </Grid>
  );

  return (
  <div className={classes.root}>
    <PaginationButtons/>
    <Grid container spacing={2}>
      {content}
    </Grid>
  </div>
  );
}
