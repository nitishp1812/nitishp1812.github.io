import React from 'react';
import { Grid, Typography, makeStyles, Fade } from '@material-ui/core';

const isMobile = (window.innerWidth <= 500);

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to bottom, #000040, #000070)',
        color: '#fff',
        padding: '4%',
        flexGrow: 1,
        paddingBottom: (isMobile) ? '110px' : '70px',
        paddingTop: (isMobile) ? '100px' : '70px'
    },
    dp: {
        borderRadius: '50%',
        borderColor: '#fff',
        border: '1.5px solid',
        width: '270px'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={2000}>
                <Grid container direction='column' spacing={8} alignItems='center' justify='center'>
                    <Grid item xs>
                        <img className={classes.dp} src={require('./imgs/dp.jpeg')} alt="DP" />
                    </Grid>

                    <Grid item xs>
                        <Typography variant='h3' align='center' gutterBottom>
                            Nitish Poddar
                        </Typography>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    );
}
