import React from 'react';
import Badge from '@material-ui/core/Badge';
import {Theme, withStyles, createStyles} from '@material-ui/core/styles';

const OnlineBadge = withStyles((theme: Theme) =>
createStyles({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}),
)(Badge);

const OfflineBadge = withStyles((theme: Theme) =>
createStyles({
  badge: {
    backgroundColor: '#ef5350',
    color: '#ef5350',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}),
)(Badge);

const BusyBadge = withStyles((theme: Theme) =>
createStyles({
  badge: {
    backgroundColor: "#ffb300",
    color: "#ffb300",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}),
)(Badge);

export default function BadgeAvatars(props: any) {
  switch (props.status) {
    case "online":
      return (
      <OnlineBadge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} variant="dot">
        {props.children}
      </OnlineBadge>
      );
    case "offline":
      return (<OfflineBadge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} variant="dot">
        {props.children}
      </OfflineBadge>);
    case "busy":
      return (<BusyBadge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} variant="dot">
        {props.children}
      </BusyBadge>);
    default:
      return (
      props.children
      )
  }
}
