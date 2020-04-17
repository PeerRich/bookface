import React from 'react';
import Root from "../src/components/Root";
import SearchResults from "../src/components/SearchResults";

export default function Companies() {
  return (
    <>
      <Root noChat>
        <SearchResults/>
      </Root>
    </>
  );
}
