import React from 'react';
import DisplayCard from './DisplayCard';

import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: '0 4% 8% 4%'
    },
    heading: {
        marginBottom: '5%'
    },
    container: {
        paddingLeft: '2%'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant='h3' gutterBottom align='center'>
                Work & Education
            </Typography>

            <Grid container className={classes.container} 
              justify='center' 
              alignItems='center' 
              spacing={5}>

                <Grid item xs>
                    <DisplayCard imageAddress='uiuc.jpg' heading='University of Illinois at Urbana-Champaign'>
                        B.Sc (Computer Science)
                        <br/>
                        Class of 2022
                    </DisplayCard>
                </Grid>


                <Grid item xs>
                    <DisplayCard imageAddress='supertron.png' heading='Supertron Infotech Pvt. Ltd.'>
                        Web Developer, Project Lead
                        <br/>
                        Summer 2019
                    </DisplayCard>
                </Grid>


                <Grid item xs>
                    <DisplayCard imageAddress='heritage.jpg' heading='Heritage Institute of Technology'>
                        Research Assistant
                        <br/>
                        Spring 2018
                    </DisplayCard>
                </Grid>
            </Grid>
        </div>
    );
}
