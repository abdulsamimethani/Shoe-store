import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shoes from './../Shoes.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: '0 auto',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '10px 10px 10px Black',
    width:400,
    height:400
  },
  link: {
    textDecoration: 'none',
    display: 'inline-block',
    borderBottom: '1px solid black',
color:'black'

  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(Shoes).map(keyobj => {

          return (
            <Grid item xs={3} key={keyobj}>
              <Paper className={classes.paper} key={keyobj}>
                <Link className={classes.link}
                key={keyobj}
                  to={`/product/${keyobj}`}  >
                  <h1>{Shoes[keyobj].name}</h1>
                  <img src={Shoes[keyobj].img} alt='' width='300' height='300' />
                </Link>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}