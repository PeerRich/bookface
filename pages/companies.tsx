import React from 'react';
import Root from "../src/components/Root";
import {Button, ButtonGroup, Paper} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import SimpleSelect from "../src/components/SimpleSelect";

export default function Companies() {
  return (
  <>
    <Root>
      <div style={{margin: "-24px"}}>
        <Toolbar style={{background: "#222"}}>
          <ButtonGroup color="secondary" style={{color: "#fff"}}>
            <Button variant="contained" color="secondary">Company</Button>
            <Button>Founders</Button>
            <Button>YC</Button>
          </ButtonGroup>
        </Toolbar>
        <Paper style={{borderRadius: 0, padding: 16}}>
          <SimpleSelect/>
        </Paper>
      </div>
    </Root>
  </>
  );
}
