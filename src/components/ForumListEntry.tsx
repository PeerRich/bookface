import React from "react";
import {useFetch} from "../hooks";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import Loading from "./Loading";

const useStyles = makeStyles(() =>
createStyles({
  listItem: {
    textAlign: "center"
  },
  listItemPrimary: {
    textDecoration: "none",
    color: "#268BD2",
    fontWeight: "bold",
    fontSize: "1.2em",
  },
  listItemSecondary: {
    textDecoration: "none",
    color: "inherit",
  },
}),
);


const ForumListEntry = () => {
  const classes = useStyles();

  const [data, loading] = useFetch(
  "https://jsonplaceholder.typicode.com/posts"
  );

  return (
  <>

    {loading ? <Loading /> : (
    <List dense={true}>
      {
        // @ts-ignore
        data.map(({id, title, url}) => (
        <ListItem key={`photo-${id}`}>
          <ListItemIcon style={{minWidth: 36}}>
            <div className={classes.listItem}>
              <div style={{height: "20px"}}>
                <ExpandLess/>
              </div>
              {id}
            </div>
          </ListItemIcon>
          <ListItemText
          primary={<>
            <a className={classes.listItemPrimary} href="#">{title}</a>
            <small style={{
              padding: 8,
              fontWeight: "bold",
              color: "rgb(153, 153, 153)"
            }}>
              /general
            </small></>}
          secondary={<>
            <a className={classes.listItemSecondary} href="#">Peer Richelsen</a> · <a
          className={classes.listItemSecondary} href="#">Mage</a> (W19)
            <VisibilityIcon style={{height: 14, position: "relative", top: "2px"}}/>149 · <CommentIcon
          style={{height: 14, position: "relative", top: "2px"}}/>2 · <small>Apr 2, 2020 6:31pm</small>
          </>}
          />
        </ListItem>
        ))}
    </List>
    )}
  </>
  );
};

export default ForumListEntry;
