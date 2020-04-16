import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PaginationButtons from "./PaginationButtons";
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {green, grey} from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CardActions from "@material-ui/core/CardActions/CardActions";

const useStyles = makeStyles(() =>
createStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    flexDirection: "column"
  },
  item: {
    minWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
}),
);


export default function InvestorGrid(props: any) {
  const classes = useStyles();

  const content = props.data.map((data: any) =>
  <Grid key={data.id} item xs={12} className={classes.item}>
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardHeader
          avatar={
            <Avatar style={{backgroundColor: data.rating === "good" ? green[400] : grey[400]}}>
              {data.type === "Fund" ? <AccountBalanceIcon/> : <PersonIcon/>}
            </Avatar>
          }
          title={data.name}
          subheader={<p style={{margin: 0}}>{data.type} · <a href={"https://" + data.website}>{data.website}</a></p>}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="ul">
              <li>{data.description}</li>
              <li>{data.sector}</li>
              <li>Invested in: {data.investedIn}</li>
            </Typography>
            <Typography style={{marginTop: 16}} variant="body1" component="p">
              YC Notes
            </Typography>
            <Typography style={{marginTop: 16}} variant="body2" color="textSecondary" component="p">
              <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna"
                <footer>— <a href="">Jack Sparrow</a> · Apr 16, 2020</footer>
              </blockquote>
            </Typography>
            <Typography style={{marginTop: 16}} variant="body1" component="p">
              Founder Reviews
            </Typography>
            <Typography style={{marginTop: 16}} variant="body2" color="textSecondary" component="p">
              <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna"
                <footer>— <a href="">Jack Sparrow</a> · Apr 16, 2020</footer>
              </blockquote>
            </Typography>

          </CardContent>

        </Grid>

        <Grid item xs={12} sm={5}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow hover>
                  <TableCell>
                    Total recent Investments
                  </TableCell>
                  <TableCell align="right">
                    <strong>{data.recentInvestments}</strong>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>
                    Expected investments
                    in the next 6 months
                  </TableCell>
                  <TableCell align="right">
                    <strong>20</strong>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>
                    Average check size
                    (self reported)
                  </TableCell>
                  <TableCell align="right">
                    <strong>$100k</strong>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>
                    Founder Grade
                  </TableCell>
                  <TableCell align="right">
                    a:64 b:7 c:1
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>
                    Positive
                  </TableCell>
                  <TableCell align="right">
                    {data.percentage}%
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>
                    YC Rating
                  </TableCell>
                  <TableCell align="right">
                    <Chip size="small"
                          style={{
                            fontWeight: "bold",
                            color: "#fff",
                            backgroundColor: data.rating === "good" ? green[400] : grey[400]
                          }}
                          label={data.rating}/>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>
                    Invests internationally?
                  </TableCell>
                  <TableCell align="right">
                    {data.international ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <CardActions disableSpacing>
            <ButtonGroup fullWidth>
              <Button color="primary">Visit Website</Button>
              <Button color="primary" variant="contained">Visit Profile</Button>
            </ButtonGroup>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  </Grid>
  );

  return (
  <div className={classes.root}>
    <Grid container spacing={2}>
      {content}
    </Grid>
    <PaginationButtons/>
  </div>
  );
}
