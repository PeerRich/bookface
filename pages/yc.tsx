import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Root from "../src/components/Root";

export default function YC() {
  return (
  <>
    <Root>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          People at YC
        </Typography>
        <Link href="/index" color="secondary">
          Go to the index page
        </Link>
      </Box>
    </Root>
  </>
  );
}
