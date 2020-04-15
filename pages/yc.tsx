import React from 'react';
import Root from "../src/components/Root";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, ButtonGroup, Paper} from "@material-ui/core";
import Link from "next/link";
import DirectoryGrid from "../src/components/DirectoryGrid";

const people = [
  {
    id: 1,
    name: "Ariana Grande",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Founder",
    email: 'example@ycombinator.com'
  },
  {
    id: 2,
    name: "Peter Jackson",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Engineer",
    email: 'example@ycombinator.com'
  },
  {
    id: 3,
    name: "Luke Skywalker",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Trouble Maker",
    email: 'example@ycombinator.com'
  },
  {
    id: 4,
    name: "Darth Vader",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "COO",
    email: 'example@ycombinator.com'
  },
  {
    id: 5,
    name: "Marilyn Monroe",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "CTO",
    email: 'example@ycombinator.com'
  },
  {
    id: 6,
    name: "Oprah Winfrey",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "CFO",
    email: 'example@ycombinator.com'
  },
  {
    id: 7,
    name: "Abraham Lincoln",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "President",
    email: 'example@ycombinator.com'
  },
  {
    id: 8,
    name: "Marie Curie",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Software Engineer",
    email: 'example@ycombinator.com'
  },
  {
    id: 9,
    name: "Martin Luther King",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Co-Founder",
    email: 'example@ycombinator.com'
  },
  {
    id: 10,
    name: "Jack Sparrow",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Produt Manager",
    email: 'example@ycombinator.com'
  },
  {
    id: 11,
    name: "Mother Teresa",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Software Engineer",
    email: 'example@ycombinator.com'
  },
  {
    id: 12,
    name: "J.K.Rowling ",
    company: "Y Combinator",
    companyLogo: "https://bookface.ycombinator.com/assets/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png",
    title: "Creative Director",
    email: 'example@ycombinator.com'
  },
];

export default function YC() {
  return (
  <>
    <Root>
      <div style={{margin: "-24px"}}>
        <Toolbar style={{background: "#222"}}>
          <ButtonGroup className="ButtonGroupNav" color="secondary">
            <Button>
              <Link href="/companies" as="/companies">Companies</Link>
            </Button>
            <Button>
              <Link href="/founders" as="/founders">Founders</Link>
            </Button>
            <Button variant="contained" color="secondary">
              <Link href="/yc" as="/yc">YC</Link>
            </Button>
          </ButtonGroup>
        </Toolbar>
        <Paper style={{borderRadius: 0, padding: 16}}>
          <p> Use the <Link href="/booker" as="/booker">booker</Link> to book office hours with <strong>YC
            partners</strong> or <strong>visiting partners</strong> (instructions are in the <Link href="/knowledge"
                                                                                                   as="/knowledge">User
            Manual</Link>). Everyone at YC is available to answer any question at any time - just reach out!
            <ul>
              <li>Founders in the current batch should direct most questions to their group partners and/or <a href="">*******@ycombinator.com</a>
              </li>
              <li>YC’s legal team can be reached at <a href="">*******@ycombinator.com</a></li>
              <li>YC’s finance team can be reached at <a href="">*******@ycombinator.com</a></li>
              <li>YC’s software team can be reached at <a href="">*******@ycombinator.com</a></li>
              <li>YC Continuity team can be reached at <a href="">*******@ycombinator.com</a></li>
              <li>The HN moderators can be reached at <a href="">*******@ycombinator.com</a></li>
            </ul>
          </p>
        </Paper>
        <div style={{padding: 24}}>
          <DirectoryGrid data={people}/>
        </div>
      </div>
    </Root>
  </>
  );
}
