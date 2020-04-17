import React from 'react';
import Root from "../src/components/Root";
import {Button, ButtonGroup, Chip, Paper, Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import DirectorySelect from "../src/components/DirectorySelect";
import Link from "next/link";
import DirectoryGrid from "../src/components/DirectoryGrid";
import ScrollTabs from "../src/components/ScrollTabs";



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
        </div>
      </Root>
    </>
  );
}
