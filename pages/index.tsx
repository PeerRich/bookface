import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
  <Container component="main" maxWidth="xs">
    <CssBaseline/>
    <Paper className="backgroundLogos">
      <div className="backgroundLeft">
      </div>
      <div className="backgroundRight">
      </div>
    </Paper>
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar} src="/yc.png"/>
      <Typography component="h1" variant="h5">
        Sign in to Bookface
      </Typography>
      <div className={classes.form}>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value="demo"
        />
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value="demo"
        autoComplete="current-password"
        />
        <FormControlLabel
        control={<Checkbox value="remember" color="primary"/>}
        label="Remember me"
        />
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >
          <Link style={{color: "#fff", textDecoration: "none"}} href="/channels">Sign In</Link>
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://ycombinator.com/apply" variant="body2">
              Apply for Y Combinator
            </Link>
          </Grid>
        </Grid>
      </div>
    </Paper>
  </Container>
  );
}
