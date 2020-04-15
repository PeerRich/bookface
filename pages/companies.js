import React from 'react';
import Root from "../src/components/Root";
import {Button, ButtonGroup, Chip, Paper, Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import DirectorySelect from "../src/components/DirectorySelect";
import Link from "next/link";
import DirectoryGrid from "../src/components/DirectoryGrid";


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
];


export default function Companies() {
  return (
    <>
      <Root>
        <div style={{margin: "-24px"}}>
          <Toolbar style={{background: "#222"}}>
            <ButtonGroup className="ButtonGroupNav" color="secondary">
              <Button variant="contained" color="secondary">
                <Link href="/companies" as="/companies">Companies</Link>
              </Button>
              <Button>
                <Link href="/founders" as="/founders">Founders</Link>
              </Button>
              <Button>
                <Link href="/yc" as="/yc">YC</Link>
              </Button>
            </ButtonGroup>
          </Toolbar>
          <Paper style={{borderRadius: 0, padding: 16}}>
            <DirectorySelect/>
          </Paper>
          <div style={{padding: 24}}>
            <div style={{paddingBottom: 16}}>
              <Typography variant="subtitle1">Showing 203 results</Typography>
              <Typography variant="caption"><Chip label="Confidential" size="small"/> Do not distribute outside of YC under any circumstance.</Typography>
            </div>
            <DirectoryGrid
              variant="company"
              data={companies}/>
          </div>
        </div>
      </Root>
    </>
  );
}
