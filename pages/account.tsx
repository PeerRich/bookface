import React from 'react';
import Root from "../src/components/Root";
import {
  CommunityMenu,
  CompanyMenu,
  ContactMenu,
  MiscMenu,
  RecruitingMenu,
  ResourcesMenu
} from "../src/components/Menus";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Knowledge() {
  const [recruiting, setRecruting] = React.useState(false);

  const toggleRecruiting = () => {
    setRecruting((prev) => !prev);
  };

  return (<Root>
    <div>
      <div style={{
        flexShrink: 0,
        whiteSpace: 'nowrap',
        margin: "-32px -24px",
      }}>
        {recruiting ? <RecruitingMenu/> :
        <div>
          <CommunityMenu/>
          <Divider/>
          <ResourcesMenu/>
          <Divider/>
          <ContactMenu/>
          <CompanyMenu/>
          <MiscMenu/>
        </div>
        }
        <div style={{flexGrow: 1}}/>
        <List>
          <ListItem>
            <ListItemIcon style={{paddingLeft: 8}}>
              <PersonAddIcon/>
            </ListItemIcon>
            <ListItemText primary="Recruiting"/>
            <ListItemSecondaryAction style={{right: 8}}>
              <Switch checked={recruiting} onClick={toggleRecruiting}/>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    </div>

  </Root>
  );
}
