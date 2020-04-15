import React from 'react';
import Root from "../src/components/Root";
import Toolbar from "@material-ui/core/Toolbar";
import {Chip, Button, ButtonGroup, Paper, Typography} from "@material-ui/core";
import FounderSelect from "../src/components/FounderSelect";
import Link from "next/link";
import DirectoryGrid from "../src/components/DirectoryGrid";

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

export default function Founders() {
  return (
  <>
    <Root>
      <div style={{margin: "-24px"}}>
        <Toolbar style={{background: "#222"}}>
          <ButtonGroup className="ButtonGroupNav" color="secondary">
            <Button>
              <Link href="/companies" as="/companies">Companies</Link>
            </Button>
            <Button variant="contained" color="secondary">
              <Link href="/founders" as="/founders">Founders</Link>
            </Button>
            <Button>
              <Link href="/yc" as="/yc">YC</Link>
            </Button>
          </ButtonGroup>
        </Toolbar>
        <Paper style={{borderRadius: 0, padding: 16}}>
          <FounderSelect/>
        </Paper>
        <div style={{padding: 24}}>
          <div style={{paddingBottom: 16}}>
            <Typography variant="subtitle1">Showing 203 results</Typography>
            <Typography variant="caption"><Chip label="Confidential" size="small"/> Do not distribute outside of YC under any circumstance.</Typography>
          </div>
          <DirectoryGrid
          data={people}/>
        </div>
      </div>

    </Root>
  </>
  );
}
