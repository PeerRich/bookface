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
import {CardContent, Tooltip, Typography} from "@material-ui/core";
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
    paddingTop: '100%',
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
        props.variant !== "company" && <Avatar aria-label="company" src={data.companyLogo}/>
      }
      title={props.variant !== "company" ? data.name : data.company + " " + data.batch}
      subheader={props.variant !== "company" ? data.title + " at " + data.company : <>{data.group} <small>{data.groupPartners}</small></>}
      />
      {props.variant === "company" ? <CardMedia
        className={classes.media}
        image="https://bookface-images.s3.amazonaws.com/logos/95fd9e9103ae10678ea3667c8b798d2060104d7f.png?1573062028"
      /> : <CardMedia
        className={classes.media}
        image={"https://source.unsplash.com/featured/?person, human," + data.name}
      />}

      {props.variant === "company" && <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>}

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
        {props.variant === "company" && <a style={{color: "#F26521"}} href="">{data.website}</a>}
      </CardActions>
    </Card>
  </Grid>
  );

  return (
  <div className={classes.root}>
    <Grid container spacing={2}>
      {content}
    </Grid>
    <PaginationButtons/>
  </div>
  );
}
