import React from 'react';
import Root from "../src/components/Root";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import InvestorSelect from "../src/components/InvestorSelect";
import InvestorGrid from "../src/components/InvestorGrid";


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

export default function Investors() {
  return (
  <>
    <Root>
      <div style={{margin: "-24px"}}>
        <Paper style={{borderRadius: 0, padding: 16}}>
          <InvestorSelect/>
        </Paper>
        <div style={{padding: 24}}>
          <div style={{paddingBottom: 16}}>
            <Typography variant="subtitle1">Showing 203 results</Typography>
            <Typography variant="caption"><Chip label="Confidential" size="small"/> Do not distribute outside of YC under any circumstance.</Typography>
          </div>
          <InvestorGrid data={investors}/>
        </div>
      </div>
    </Root>
  </>
  );
}
