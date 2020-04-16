import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import CustomLink from "./CustomLink";
import {SvgIcon} from "@material-ui/core";
import NestedList from "./NestedList";
import ForumIcon from "@material-ui/icons/Forum";
import BusinessIcon from '@material-ui/icons/Business';
import GroupIcon from '@material-ui/icons/Group';
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DollarIcon from '@material-ui/icons/AttachMoney';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoodBadIcon from "@material-ui/icons/MoodBad";
import SecurityIcon from "@material-ui/icons/Security";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Menus() {
  return (
    <>
      <List>
        <CustomLink href="/channels" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <ForumIcon/>
            </ListItemIcon>
            <ListItemText primary="Forum"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/companies" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <BusinessIcon/>
            </ListItemIcon>
            <ListItemText primary="Companies"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/founders" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <GroupIcon/>
            </ListItemIcon>
            <ListItemText primary="Founders"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/yc" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <SvgIcon x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                <g>
                  <g>
                    <path
                      d="M526.2,568.9l169.7-318.4h-71.5L524.2,449.6c-10.2,20.4-19.6,40-28.1,58.7l-26.8-58.7l-98.9-199.1h-76.6l167.8,314.5v206.7h64.4L526.2,568.9L526.2,568.9z M990,10v980H10V10H990z"/>
                  </g>
                </g>
              </SvgIcon>
            </ListItemIcon>
            <ListItemText primary="Y Combinator"/>
          </ListItem>
        </CustomLink>
      </List>
      <Divider/>
      <List>
        <CustomLink href="/deals" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <CreditCardIcon/>
            </ListItemIcon>
            <ListItemText primary="Deals"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/investors" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <DollarIcon/>
            </ListItemIcon>
            <ListItemText primary="Investor Database"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/knowledge" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary="Knowledge Base"/>
          </ListItem>
        </CustomLink>
      </List>
      <Divider/>
      <List>
        <CustomLink href="/booker" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <ForumIcon/>
            </ListItemIcon>
            <ListItemText primary="Book Office Hours"/>
          </ListItem>
        </CustomLink>
      </List>
      <Divider/>
      <NestedList icon={
        <ListItemIcon style={{paddingLeft: 8}}>
          <InfoIcon/>
        </ListItemIcon>} title="Miscellaneous">
        <ListItem component="a" button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3Upykce1ifD7bbbYCdPAcrwrNKPbIkVr5EUtSjkJSxFWxsQ/viewform">
          <ListItemIcon style={{paddingLeft: 8}}>
            <MoodBadIcon/>
          </ListItemIcon>
          <ListItemText primary="Report a Bad Actor"/>
        </ListItem>
        <ListItem component="a" button href="https://apply.ycombinator.com/recommendations">
          <ListItemIcon style={{paddingLeft: 8}}>
            <ThumbUpIcon/>
          </ListItemIcon>
          <ListItemText primary="Recommend Startups"/>
        </ListItem>
        <ListItem component="a" button href="mailto:software@ycombinator.com">
          <ListItemIcon style={{paddingLeft: 8}}>
            <MailIcon/>
          </ListItemIcon>
          <ListItemText primary="Email us"/>
        </ListItem>
        <ListItem component="a" button href="https://www.ycombinator.com/legal#privacy">
          <ListItemIcon style={{paddingLeft: 8}}>
            <SecurityIcon/>
          </ListItemIcon>
          <ListItemText primary="Privacy Policy"/>
        </ListItem>
      </NestedList>
      <NestedList icon={
        <ListItemIcon style={{paddingLeft: 8}}>
          <WorkIcon/>
        </ListItemIcon>} title="Company">
        <CustomLink href="/company" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <ApartmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Mage"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/booker" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <DollarIcon/>
            </ListItemIcon>
            <ListItemText primary="Investments"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/booker" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <ThumbUpIcon/>
            </ListItemIcon>
            <ListItemText primary="Investor Likes"/>
          </ListItem>
        </CustomLink>
      </NestedList>
      <List>
        <CustomLink href="/channels" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <ForumIcon/>
            </ListItemIcon>
            <ListItemText primary="Forum"/>
          </ListItem>
        </CustomLink>
      </List>
      <Divider/>
    </>
  );
}

export function RecruitingMenu() {
  return (
    <>
      <List>
        <CustomLink href="/deals" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <StarIcon/>
            </ListItemIcon>
            <ListItemText primary="Candidates"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/inbox" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/knowledge" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <PersonAddIcon/>
            </ListItemIcon>
            <ListItemText primary="Jobs"/>
          </ListItem>
        </CustomLink>
        <CustomLink href="/knowledge" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <ApartmentIcon/>
            </ListItemIcon>
            <ListItemText primary="My Team"/>
          </ListItem>
        </CustomLink>
      </List>
      <Divider/>
      <List>
        <CustomLink href="/knowledge" passHref>
          <ListItem component="a" button>
            <ListItemIcon style={{paddingLeft: 8}}>
              <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary="Hiring Guide"/>
          </ListItem>
        </CustomLink>
      </List>
    </>
  )
}

