import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Loading() {
  return (
  <div style={{position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    width: "100%",
    zIndex: 1201}}>
    <LinearProgress color="secondary"/>
  </div>
  );
}
