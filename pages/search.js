import React from 'react';
import Root from "../src/components/Root";
import {Button, ButtonGroup, Chip, Paper, Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import DirectorySelect from "../src/components/DirectorySelect";
import Link from "next/link";
import DirectoryGrid from "../src/components/DirectoryGrid";
import ScrollTabs from "../src/components/ScrollTabs";


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


export default function Companies() {
  return (
    <>
      <Root noChat>
        <ScrollTabs/>

        <div style={{margin: "-24px"}}>

          {/*<<Toolbar style={{background: "#222"}}>
            ButtonGroup className="ButtonGroupNav" color="secondary">
              <Button variant="contained" color="secondary">
                <Link href="?filter=forum" as="?filter=forum">Forum</Link>
              </Button>
              <Button>
                <Link href="?filter=forum" as="?filter=forum">Founders</Link>
              </Button>
              <Button>
                <Link href="?filter=forum" as="?filter=forum">Companies</Link>
              </Button>
              <Button>
                <Link href="?filter=forum" as="?filter=forum">Deals</Link>
              </Button>
              <Button>
                <Link href="?filter=forum" as="?filter=forum">Knowledge Base</Link>
              </Button>
            </ButtonGroup>
          </Toolbar>*/}

          <div style={{padding: 24}}>
            <div style={{paddingBottom: 16}}>
              <Typography variant="subtitle1">Showing 203 results</Typography>
              <Typography variant="caption"><Chip label="Confidential" size="small"/> Do not distribute outside of YC
                under any circumstance.</Typography>
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
