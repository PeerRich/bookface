import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import DirectoryGrid from "./DirectoryGrid";
import InvestorGrid from "./InvestorGrid";
import ForumListEntry from "./ForumListEntry";
import {Chip, Paper} from "@material-ui/core";
import DealListEntry from "./DealListEntry";
import {MessageList} from "../../pages/messages";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

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


const people = [
  {
    id: 1,
    name: "Peer Richelsen",
    company: "Mage (W19)",
    companyLogo: "https://magemarket.com/static/logo.svg",
    title: "Founder, CEO",
    email: 'peer@magemarket.com'
  },
  {
    id: 2,
    name: "Malte Delfs",
    company: "Mage (W19)",
    companyLogo: "https://magemarket.com/static/logo.svg",
    title: "Founder, CTO",
    email: 'example@ycombinator.com'
  },
  {
    id: 3,
    name: "Luke Skywalker",
    company: "Mage (W19)",
    companyLogo: "https://magemarket.com/static/logo.svg",
    title: "Trouble Maker",
    email: 'example@ycombinator.com'
  },
  {
    id: 4,
    name: "Darth Vader",
    company: "Mage (W19)",
    companyLogo: "https://magemarket.com/static/logo.svg",
    title: "COO",
    email: 'example@ycombinator.com'
  },
];

const companies = [
  {
    id: 1,
    company: "Mage",
    companyLogo: "https://magemarket.com/static/logo.svg",
    batch: "(W19)",
    group: "Group 3",
    email: "founders@magemarket.com",
    groupPartners: "Jack Sparrow, Leia Organa, The Queen",
    description: "The safest way to buy and sell collectibles starting with Magic: The Gathering",
    website: "magemarket.com",
  },
  {
    id: 1,
    company: "Mage",
    companyLogo: "https://magemarket.com/static/logo.svg",
    batch: "(W19)",
    group: "Group 3",
    email: "founders@magemarket.com",
    groupPartners: "Jack Sparrow, Leia Organa, The Queen",
    description: "The safest way to buy and sell collectibles starting with Magic: The Gathering",
    website: "magemarket.com",
  },
  {
    id: 1,
    company: "Mage",
    companyLogo: "https://magemarket.com/static/logo.svg",
    batch: "(W19)",
    group: "Group 3",
    email: "founders@magemarket.com",
    groupPartners: "Jack Sparrow, Leia Organa, The Queen",
    description: "The safest way to buy and sell collectibles starting with Magic: The Gathering",
    website: "magemarket.com",
  },
  {
    id: 1,
    company: "Mage",
    companyLogo: "https://magemarket.com/static/logo.svg",
    batch: "(W19)",
    group: "Group 3",
    email: "founders@magemarket.com",
    groupPartners: "Jack Sparrow, Leia Organa, The Queen",
    description: "The safest way to buy and sell collectibles starting with Magic: The Gathering",
    website: "magemarket.com",
  },
];


const investors = [
  {
    id: 1,
    name: "ACME Ventures",
    type: "Fund",
    website: "acmeventures.com",
    percentage: "94",
    recentInvestments: "114",
    rating: "good",
    description: "ACME Ventures is a seed fund with general partners: Jack Sparrow, Mariah Carey, Elon Musk",
    sector: 'Food and Beverage, Engineering, Product and Design, Office Management',
    international: true,
    investedIn: "Uber, Amazon, Facebook, AirBnB, Reddit, Twitch"
  },
  {
    id: 2,
    name: "Scrooge McDuck",
    type: "Private",
    website: "acmeventures.com",
    percentage: "94",
    recentInvestments: "11",
    rating: "bad",
    description: "Scrooge McDuck is an angel investor from Duckburg",
    sector: 'Food and Beverage, Engineering, Product and Design, Office Management',
    international: false,
    investedIn: "Uber, Amazon, Facebook, AirBnB, Reddit, Twitch"
  },
  {
    id: 3,
    name: "ACME Ventures",
    type: "Fund",
    website: "acmeventures.com",
    percentage: "94",
    recentInvestments: "17",
    rating: "unrated",
    description: "ACME Ventures is a seed fund with general partners: Jack Sparrow, Mariah Carey, Elon Musk",
    sector: 'Food and Beverage, Engineering, Product and Design, Office Management',
    international: true,
    investedIn: "Uber, Amazon, Facebook, AirBnB, Reddit, Twitch"
  },
  {
    id: 4,
    name: "ACME Ventures",
    type: "Fund",
    website: "acmeventures.com",
    percentage: "94",
    recentInvestments: "99",
    rating: "good",
    description: "ACME Ventures is a seed fund with general partners: Jack Sparrow, Mariah Carey, Elon Musk",
    sector: 'Food and Beverage, Engineering, Product and Design, Office Management',
    international: false,
    investedIn: "Uber, Amazon, Facebook, AirBnB, Reddit, Twitch"
  },

];

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;


  return (
  <Typography
  component="div"
  role="tabpanel"
  hidden={value !== index}
  id={`scrollable-auto-tabpanel-${index}`}
  aria-labelledby={`scrollable-auto-tab-${index}`}
  {...other}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    margin: -24,
  },
  tab: {
    color: "#fff",
  },
  tabPanel: {
    marginTop: 50
  },
  chip: {
    margin: 4
  },
}));

function SearchResultsNumber() {
  return <p><small>Results 1–10 of 11666 (0.009 seconds)  ·  Sort by: <a href="#">Popularity</a> ·  Since: <a href="#">Forever</a></small></p>;
}

export default function SearchResults() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [channelState, setChannel] = useState("All Posts");


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };


  const handleClick = (channel: string) => {
    setChannel(channel);
  };


  return (
  <div className={classes.root}>
    <AppBar position="relative" style={{position: "fixed", background: "#222", width: "100%"}}>
      <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
      >
        <Tab className={classes.tab} label="Forum" {...a11yProps(0)} />
        <Tab className={classes.tab} label="Founders" {...a11yProps(1)} />
        <Tab className={classes.tab} label="Companies" {...a11yProps(2)} />
        <Tab className={classes.tab} label="Investors" {...a11yProps(3)} />
        <Tab className={classes.tab} label="Deals" {...a11yProps(4)} />
        <Tab className={classes.tab} label="Knowledge Base" {...a11yProps(5)} />
        <Tab className={classes.tab} label="Messages" {...a11yProps(6)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <div className={classes.tabPanel}>
        <div style={{margin: "-24px -24px 24px -24px"}}>
          <Paper style={{borderRadius: 0, padding: 16}}>
            {channels.map(channel => (
            <Chip key={channel} onClick={() => handleClick(channel)}
                  style={{margin: 4}} variant={channelState === channel ? "default" : "outlined"} size="small"
                  label={channel}/>
            ))}
          </Paper>
        </div>
        <div style={{paddingBottom: 20}}>
          <SearchResultsNumber/>
          <div>
            <small>
              Trending:
              <Chip className={classes.chip} size="small" label="ppp"/>
              <Chip className={classes.chip} size="small" label="radius"/>
              <Chip className={classes.chip} size="small" label="pro rata"/>
              <Chip className={classes.chip} size="small" label="radius bank"/>
              <Chip className={classes.chip} size="small" label="nfx"/>
              <Chip className={classes.chip} size="small" label="launch bookface"/>
              <Chip className={classes.chip} size="small" label="covid"/>
              <Chip className={classes.chip} size="small" label="notion" />
              <Chip className={classes.chip} size="small" label="siempre"/>
              <Chip className={classes.chip} size="small" label="hiring" />
            </small>
          </div>
        </div>
        <ForumListEntry/>
      </div>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <div className={classes.tabPanel}>
        <div style={{paddingBottom: 20}}>
          <SearchResultsNumber/>
        </div>
        <DirectoryGrid
        data={people}/>
      </div>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <div className={classes.tabPanel}>
        <div style={{paddingBottom: 20}}>
          <SearchResultsNumber/>
        </div>
        <DirectoryGrid
        variant="company"
        data={companies}/>
      </div>
    </TabPanel>
    <TabPanel value={value} index={3}>
      <div className={classes.tabPanel}>
        <div style={{paddingBottom: 20}}>
          <SearchResultsNumber/>
        </div>
        <InvestorGrid data={investors}/>
      </div>
    </TabPanel>
    <TabPanel value={value} index={4}>
      <div className={classes.tabPanel}>
        <div style={{paddingBottom: 20}}>
          <SearchResultsNumber/>
        </div>
        <DealListEntry/>
      </div>
    </TabPanel>
    <TabPanel value={value} index={5}>
      <div className={classes.tabPanel}>
        Search results of Knowledge Base
      </div>
    </TabPanel>
    <TabPanel value={value} index={6}>
      <div className={classes.tabPanel}>
        <div style={{paddingBottom: 20, margin: "-30px -24px"}}>
          <MessageList/>
        </div>
      </div>
    </TabPanel>
  </div>
  );
}
