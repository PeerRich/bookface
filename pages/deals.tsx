import React, {useState} from 'react';
import Root from "../src/components/Root";
import {Button, ButtonGroup, Chip, Paper} from "@material-ui/core";
import DealListEntry from "../src/components/DealListEntry";

const deals = [
  "High Value",
  "Dev Tools / APIs",
  "Other",
  "Operations",
  "Analytics / Optimization",
  "Business Operations",
  "Hosting",
  "Lead Generation",
  "Hardware",
  "Collaboration",
  "Banking/Finance",
  "Recruiting",
  "Bio",
  "Outbound Marketing",
  "Accounting",
  "CRM",
  "Priority Support",
  "Equipment",
];

export default function Deals() {
  const [category, setCategory] = useState("High Value");

  const handleClick = (category: string) => {
    setCategory(category);
  };

  return (
  <>
    <Root>
      <div style={{margin: "-24px -24px 24px -24px"}}>
        <Paper style={{borderRadius: 0, padding: 16}}>
          {deals.map(selection => (
          <Chip key={selection} onClick={() => handleClick(selection)}
                style={{margin: 4}} variant={category === selection ? "default" : "outlined"} size="small"
                label={selection}/>
          ))}
        </Paper>
      </div>
      <ButtonGroup size="small">
        <Button variant="contained" color="primary">Submit New Deal</Button>
        <Button color="primary">
          Request a Deal
        </Button>
      </ButtonGroup>
      <div style={{marginTop: 24}}>
        <DealListEntry/>
      </div>
    </Root>
  </>
  );
}
