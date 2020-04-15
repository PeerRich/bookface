import React from "react";
import {useFetch} from "../hooks";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Loading from "./Loading";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Card from "@material-ui/core/Card/Card";
import {red} from "@material-ui/core/colors";
import {Theme} from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Chip, Grid} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    width: "100%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}),
);


const DealListEntry = () => {
  const classes = useStyles();

  const [data, loading] = useFetch(
  "https://jsonplaceholder.typicode.com/posts"
  );

  return (<>
    {loading ? <Loading/> : (
    <Grid container spacing={2}>
      {
        // @ts-ignore
        data.map(({id, title, url}) => (
        <Grid item xs={12} sm={6} key={`deal-${id}`}>
          <Card className={classes.root}>
            <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon/>
              </IconButton>
            }
            title={title}
            subheader={<Chip size="small" label="High Value" color="secondary"/>}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon/>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        ))}
    </Grid>
    )}
  </>
  );
};

export default DealListEntry;
