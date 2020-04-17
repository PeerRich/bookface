import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

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
  }
}));

export default function ScrollTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    console.log(event);
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
          <Tab className={classes.tab} label="All" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Forum" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Founders" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Companies" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Investors" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Deals" {...a11yProps(5)} />
          <Tab className={classes.tab} label="Knowledge" {...a11yProps(6)} />
          <Tab className={classes.tab} label="Messages" {...a11yProps(7)} />
        </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
    <TabPanel value={value} index={3}>
      Item Four
    </TabPanel>
    <TabPanel value={value} index={4}>
      Item Five
    </TabPanel>
    <TabPanel value={value} index={5}>
      Item Six
    </TabPanel>
    <TabPanel value={value} index={6}>
      Item Seven
    </TabPanel>
    <TabPanel value={value} index={7}>
      Item Seven
    </TabPanel>
  </div>
  );
}
