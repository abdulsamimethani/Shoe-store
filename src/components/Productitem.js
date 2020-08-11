import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '0 auto',
        padding: 0
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: 'center',
    },
}));

export default function Productitem() {
    const { id } = useParams();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h2>{Shoes[id].name}</h2>
                        <img src={Shoes[id].img} width='400' height='400' alt=''/>
                        </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
;