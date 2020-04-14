import React from 'react';
import Root from "../src/components/Root";
import {Button, ButtonGroup, Paper} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import DirectorySelect from "../src/components/DirectorySelect";
import Link from "next/link";
import {ButtonLink} from "../src/components/ButtonLink";

export default function Companies() {
  return (
    <>
      <Root>
        <div style={{margin: "-24px"}}>
          <Toolbar style={{background: "#222"}}>
            <ButtonGroup className="ButtonGroupNav" color="secondary">
              <Button variant="contained" color="secondary">
                <Link href="/companies" as="/companies">Company</Link>
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
        </div>
      </Root>
    </>
  );
}
