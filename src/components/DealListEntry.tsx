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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Chip, Grid} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() =>
createStyles({
  root: {
    width: "100%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}),
);


const DealListEntry = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [data, loading] = useFetch(
  "https://jsonplaceholder.typicode.com/users"
  );

  return (<>
    {loading ? <Loading/> : (
    <Grid container spacing={2}>
      {
        // @ts-ignore
        data.map(({id, name, email, title, website}) => (
        <Grid item xs={12} sm={6} md={6} key={`deal-${id}`}>
          <Card className={classes.root}>
            <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon/>
              </IconButton>
            }
            title={name}
            subheader={<>
              <div style={{marginBottom: 8}}>{email}</div>
              <Chip size="small" label="High Value" color="primary" style={{margin: 4}}/>
              <Chip size="small" label="YC S18" color="secondary" style={{margin: 4}}/>
            </>}
            />
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                DETAILS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum."

                <ul>
                  <li>
                    "Lorem ipsum dolor sit amet, consectetur adipis
                  </li>
                  <li>
                    "Lorem ipsum dolor sit amet, consectetur adipis
                  </li>
                  <li>
                    "Lorem ipsum dolor sit amet, consectetur adipis
                  </li>
                  <li>
                    "Lorem ipsum dolor sit amet, consectetur adipis
                  </li>
                </ul>
              </Typography>

              <>
                <Chip variant="outlined"
                      style={{color: "green", borderColor: "green", margin: 4}}
                      size="small" label="422 using" color="primary"/>
                <Chip variant="outlined"
                      style={{color: "#f0ad4e", borderColor: "#f0ad4e", margin: 4}}
                      size="small" label="4 problems"
                      color="secondary"/>
              </>

            </CardContent>

            <Divider/>

            <CardActions disableSpacing>
              <ButtonGroup size="small">
                <Button
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                  {!expanded ? "Show" : "Hide"} Instruction
                </Button>
                <Button color="secondary">Add Review</Button>
                <Button style={{color: "green"}} color="primary">Mark as Using</Button>
                <Button style={{color: "#f0ad4e"}}>Report Problem</Button>
              </ButtonGroup>

            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  TO REDEEM
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.<br/><br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.<br/><br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)<br/><br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Set aside off of the heat to let rest for 10 minutes, and then serve.<br/><br/>
                </Typography>
              </CardContent>
            </Collapse>

            <Divider/>


            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                32 REVIEWS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna"
                  <footer>— <a href="">Jack Sparrow</a> · Apr 16, 2020</footer>
                </blockquote>
                <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna"
                  <footer>— <a href="">Jack Sparrow</a> · Apr 16, 2020</footer>
                </blockquote>
                <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna"
                  <footer>— <a href="">Jack Sparrow</a> · Apr 16, 2020</footer>
                </blockquote>
                <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna"
                  <footer>— <a href="">Jack Sparrow</a> · Apr 16, 2020</footer>
                </blockquote>
              </Typography>
              <Button color="primary">Show 33 more reviews</Button>
            </CardContent>
          </Card>
        </Grid>
        ))}
    </Grid>
    )}
  </>
  );
};

export default DealListEntry;
