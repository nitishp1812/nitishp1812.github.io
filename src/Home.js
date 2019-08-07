import React from 'react';
import { Grid, Typography, makeStyles, Fade } from '@material-ui/core';

import dp from './imgs/dp.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#55a',
        color: '#fff',
        padding: '4%',
        flexGrow: 1
    },
    dp: {
        borderRadius: '50%',
        borderColor: '#fff',
        border: '2px solid',
        width: '200px'
    },
    detailContainer: {
        textAlign: 'center' 
    },
    linkContainer: {
        width: '450px',
        marginTop: '-120px'
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={3500}>
                <Grid container direction='column' spacing={5} alignItems='center' justify='center'>
                    <Grid item xs>
                        <img className={classes.dp} src={dp} alt="DP" />
                    </Grid>

                    <Grid item xs>
                        <Typography variant='h2' align='center'>
                            Nitish Poddar
                        </Typography>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    );
}

export default Home;
