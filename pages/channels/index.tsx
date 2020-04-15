import React, {useState} from 'react';
import Root from "../../src/components/Root";
import {Button, Chip, ButtonGroup, Paper, Hidden} from "@material-ui/core";
import ForumListEntry from "../../src/components/ForumListEntry";
import AddToHomeScreenDialog from "../../src/components/AddToHomeScreenDialog";

export default function Index() {
  const [channelState, setChannel] = useState("All Posts");

  const channels = [
    "All Posts",
    "⭐ Featured Posts",
    "YC Announcements",
    "🔒 Batch W2019",
    "🔒 Group W2019-4",
    "International",
    "General",
    "Growth Stage",
    "Series A",
    "Engineering",
    "Sales",
    "Marketing & Growth",
    "HR",
    "Legal",
    "Finance/Fundraising",
    "Product",
    "Management",
    "Hiring",
    "Request an Intro",
    "Job Openings",
    "Job Candidates",
    "For Sale",
    "Offices & Housing",
    "Outside Events",
    "Side Projects",
    "Recruiting"
  ];


  const handleClick = (channel: string) => {
    setChannel(channel);
  };

  return (
  <>
    <Root>
      <Hidden smUp>
        <AddToHomeScreenDialog/>
      </Hidden>
      <div style={{margin: "-24px -24px 24px -24px"}}>
        <Paper style={{borderRadius: 0, padding: 16}}>
          {channels.map(channel => (
          <Chip key={channel} onClick={() => handleClick(channel)}
                style={{margin: 4}} variant={channelState === channel ? "default" : "outlined"} size="small"
                label={channel}/>
          ))}
        </Paper>
      </div>
      <ButtonGroup size="small">
        <Button variant="contained" color="primary">New Post</Button>
        <Button color="primary">
          Notification Settings
        </Button>
        <Button color="primary">
          Guidelines
        </Button>
      </ButtonGroup>
      <ForumListEntry/>
    </Root>
  </>
  );
}
