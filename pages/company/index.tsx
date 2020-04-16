import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../../src/Link';
import Root from "../../src/components/Root";

export default function Company() {
  return (
  <>
    <Root>
      <Typography variant="h4" component="h1" gutterBottom>
        Mage
      </Typography>
      Work in Progress. Nothing to see here, yet. <br/>
      <Link href="/channels" color="secondary">
        Go to back to the forum page
      </Link>
    </Root>
  </>
  );
}
