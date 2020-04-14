import React from 'react';
import Root from "../src/components/Root";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, ButtonGroup, Paper} from "@material-ui/core";
import FounderSelect from "../src/components/FounderSelect";
import Link from "next/link";

export default function Founders() {
  return (
  <>
    <Root>
      <div style={{margin: "-24px"}}>
        <Toolbar style={{background: "#222"}}>
          <ButtonGroup className="ButtonGroupNav" color="secondary">
            <Button>
              <Link href="/companies" as="/companies">Company</Link>
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
      </div>
    </Root>
  </>
  );
}
