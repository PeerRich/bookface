import React, {useState} from 'react';
import Root from "../../src/components/Root";
import {Button, Chip, Divider, ButtonGroup} from "@material-ui/core";
import ForumListEntry from "../../src/components/ForumListEntry";

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
      <div>
        {channels.map(channel => (
        <Chip key={channel} onClick={() => handleClick(channel)}
              style={{margin: 4}} variant={channelState === channel ? "default" : "outlined"} size="small"
              label={channel}/>
        ))}
        <Chip onClick={() => alert("change settings")}
              style={{margin: 4}} variant="default" size="small"
              label="Browse Channels" color="primary" />
      </div>
      <Divider style={{margin: "24px 0px"}}/>
      <ButtonGroup size="small">
        <Button variant="contained" color="primary">New Post</Button>
        <Button color="primary">
          Notification Settings
        </Button>
        <Button  color="primary">
          Guidelines
        </Button>
      </ButtonGroup>
      <ForumListEntry/>
    </Root>
  </>
  );
}
