import React from 'react';
import clsx from 'clsx';
import Link from "next/link";
import {createStyles, fade, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ClearIcon from '@material-ui/icons/Clear';
import MailIcon from '@material-ui/icons/Email';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoIcon from '@material-ui/icons/Videocam';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import VideoDialog from "./VideoDialog";
import BadgeAvatars from "./BadgeAvatars";
import BottomNav from "./BottomNav";
import Menus, {RecruitingMenu} from "./Menus";
import Messenger from "./Messenger";
import {Hidden} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  grow: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#222",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: "100%",
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  chatParticipant: {
    display: 'inline',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  listItemIcon: {
    paddingLeft: 8
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#f6f6ef",
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#f6f6ef",
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  chatOpen: {
    width: drawerWidth + 50,
    position: "fixed",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#f6f6ef",
  },
  chatClose: {
    position: "fixed",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#f6f6ef",
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  messenger: {
    position: "fixed",
    zIndex: 1199,
    bottom: 0,
    height: 400,
    width: 301,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  messengerOpen: {
    transition: theme.transitions.create('right', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  messengerClose: {
    transition: theme.transitions.create('right', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbarChat: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginRight: 64,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}),
);


export default function Root(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openChat, setOpenChat] = React.useState(false);
  const [openMessenger, setOpenMessenger] = React.useState(true);
  const [recruiting, setRecruting] = React.useState(false);


  const toggleRecruiting = () => {
    setRecruting((prev) => !prev);
  };


  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMessengerOpen = () => {
    setOpenMessenger(true);
    setOpenChat(true);
  };

  const handleMessengerClose = () => {
    setOpenMessenger(false);
  };

  const handleChatOpen = () => {
    setOpenChat(true);
  };

  const handleChatClose = () => {
    setOpenChat(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
  <Menu
  anchorEl={anchorEl}
  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
  id={menuId}
  keepMounted
  transformOrigin={{vertical: 'top', horizontal: 'right'}}
  open={isMenuOpen}
  onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
  <Menu
  anchorEl={mobileMoreAnchorEl}
  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
  id={mobileMenuId}
  keepMounted
  transformOrigin={{vertical: 'top', horizontal: 'right'}}
  open={isMobileMenuOpen}
  onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon/>
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton aria-label="show 11 new notifications" color="inherit">
        <Badge badgeContent={11} color="secondary">
          <NotificationsIcon/>
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
      >
        <BadgeAvatars>
          <Avatar className={classes.small}
                  src="https://bookface-images.s3.amazonaws.com/avatars/3125c4d8e5df501ff224bf5f00cb9dc2778df159.jpg"
                  alt="Peer Rich"/>
        </BadgeAvatars>
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
  );

  // @ts-ignore
  return (
  <div className={classes.root}>
    <CssBaseline/>
    <AppBar
    style={{width: mobile ? "100%" : undefined}}
    position="fixed"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}
    >
      <Toolbar>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open,
        })}
        >
          <MenuIcon/>
        </IconButton>
        <Link href="/channels" as="/channels">
          <img style={{marginRight: -3, zIndex: 1}}
               src="/yc.png"
               height={35}/>
        </Link>
        <div className={classes.grow}/>
        <div className={classes.sectionDesktop}>
          <IconButton onClick={handleChatOpen} aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon/>
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          >
            <BadgeAvatars>
              <Avatar className={classes.small}
                      src="https://bookface-images.s3.amazonaws.com/avatars/3125c4d8e5df501ff224bf5f00cb9dc2778df159.jpg"
                      alt="Peer Rich"/>
            </BadgeAvatars>
          </IconButton>
          <Typography variant="body2" style={{lineHeight: "64px", padding: "0px 8px", fontWeight: "bold"}}>
            Peer
          </Typography>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon/>
          </div>
          <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{'aria-label': 'search'}}
          />
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
          >
            <MoreIcon/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}

    {!mobile && <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
        </IconButton>
      </div>
      <Divider/>

      {/* Menu Switch for Recruiting */
        recruiting ? <RecruitingMenu/> :
        <Menus/>
      }

      <div className={classes.grow}/>
      <List>
        <ListItem>
          <ListItemIcon style={{visibility: open ? "visible" : "hidden"}} className={classes.listItemIcon}>
            <Hidden smDown><PersonAddIcon/></Hidden>
          </ListItemIcon>
          <ListItemText style={{visibility: open ? "visible" : "hidden"}} primary="Recruiting"/>
          <ListItemSecondaryAction style={{right: 8}}>
            <Switch checked={recruiting} onClick={toggleRecruiting}/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

    </Drawer>}

    <main className={classes.content} style={{minWidth: mobile ? "100%" : undefined}}>
      <div className={classes.toolbar}/>
      {props.children}
    </main>

    {!mobile && <Drawer
      variant="permanent"
      anchor="right"
      className={clsx(classes.drawer, {
        [classes.chatOpen]: openChat,
        [classes.chatClose]: !openChat,
      })}
      classes={{
        paper: clsx({
          [classes.chatOpen]: openChat,
          [classes.chatClose]: !openChat,
        }),
      }}
    >
      <>
        <Divider style={{marginBottom: 60}}/>
        <List>
          <ListItem alignItems="flex-start" button onClick={() => handleMessengerOpen()}>
            <ListItemAvatar>
              <BadgeAvatars status="online">
                <Avatar alt="Remy Sharp"
                        src="https://bookface-images.s3.amazonaws.com/avatars/1b324f828a6542f5a943c4bbb3c945adb3e45969.jpg?1546203626"/>
              </BadgeAvatars>
            </ListItemAvatar>
            <ListItemText
              primary="that's pretty slick"
              secondary={
                <React.Fragment>
                  <Typography
                  component="span"
                  variant="body2"
                  className={classes.chatParticipant}
                  color="textPrimary"
                  >
                    Malte Delfs
                  </Typography>
                  — Mage (W19)
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="flex-start" button onClick={() => handleMessengerOpen()}>
            <ListItemAvatar>
              <BadgeAvatars status="offline">
                <Avatar alt="Remy Sharp"
                        src="https://bookface-images.s3.amazonaws.com/avatars/d8621183e71fe34a93a47bec7e5b45c5cafd0253.jpg?1515222354"/>
              </BadgeAvatars>
            </ListItemAvatar>
            <ListItemText
              primary="Wow, love the redesign! ..."
              secondary={
                <React.Fragment>
                  <Typography
                  component="span"
                  variant="body2"
                  className={classes.chatParticipant}
                  color="textPrimary"
                  >
                    Paul Graham </Typography>
                  — Y Combinator
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="flex-start" button onClick={() => handleMessengerOpen()}>
            <ListItemAvatar>
              <BadgeAvatars status="busy">
                <Avatar alt="Remy Sharp"
                        src="/confused-meme.png"/>
              </BadgeAvatars>
            </ListItemAvatar>
            <ListItemText
              primary="How did I get here?"
              secondary={
                <React.Fragment>
                  <Typography
                  component="span"
                  variant="body2"
                  className={classes.chatParticipant}
                  color="textPrimary"
                  >
                    Nick Young
                  </Typography>
                  — NBA
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="flex-start" button onClick={() => handleMessengerOpen()}>
            <ListItemAvatar>
              <BadgeAvatars status="busy">
                <Avatar alt="Remy Sharp"
                        src="/cat.jpg"/>
              </BadgeAvatars>
            </ListItemAvatar>
            <ListItemText
              primary="Can I haz some music?"
              secondary={
                <React.Fragment>
                  <Typography
                  component="span"
                  variant="body2"
                  className={classes.chatParticipant}
                  color="textPrimary"
                  >
                    Keyboard Cat
                  </Typography>
                  — Meme Corp
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

        <Divider/>

        <div className={classes.grow}/>

        <Divider/>

        <div className={classes.toolbarChat}>
          {openChat ?
          <IconButton onClick={handleChatClose}>
            <ChevronRightIcon/>
          </IconButton> :
          <IconButton onClick={handleChatOpen}>
            <ChevronLeftIcon/>
          </IconButton>}
        </div>

        {openMessenger &&
        <Paper style={{zIndex: 2, bottom: 0, right: openChat ? 310 : 88}} className={clsx(classes.messenger, {
          [classes.messengerOpen]: openChat,
          [classes.messengerClose]: !openChat,
        })}>
          <Messenger buttons={
            <ListItemSecondaryAction>
              <IconButton href="mailto:person@example.com" size="small" edge="end" aria-label="email">
                <MailIcon/>
              </IconButton>
              <VideoDialog button={<VideoIcon/>}/>
              <IconButton onClick={() => handleMessengerClose()} size="small" edge="end" aria-label="close">
                <ClearIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          }/>
        </Paper>}
      </>

    </Drawer>}

    {mobile && <BottomNav>
      {/* Menu Switch for Recruiting */
        recruiting ? <RecruitingMenu/> :
        <Menus/>
      }
      <List>
        <ListItem>
          <ListItemIcon style={{visibility: open ? "visible" : "hidden"}} className={classes.listItemIcon}>
            <PersonAddIcon/>
          </ListItemIcon>
          <ListItemText style={{visibility: open ? "visible" : "hidden"}} primary="Recruiting"/>
          <ListItemSecondaryAction style={{right: 8}}>
            <Switch checked={recruiting} onClick={toggleRecruiting}/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </BottomNav>}

  </div>
  );
}
