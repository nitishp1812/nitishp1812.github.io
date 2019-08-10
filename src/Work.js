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
              spacing={10}>

                <Grid item xs={3}>
                    <DisplayCard imageAddress='uiuc.jpg'>
                        <Typography align='center' variant='h6' gutterBottom>
                            University of Illinois at Urbana-Champaign
                        </Typography>
                        <Typography align='center' variant='body2'>
                            B.Sc (Computer Science)
                            <br/><br/>
                            Class of 2022
                        </Typography>
                    </DisplayCard>
                </Grid>


                <Grid item xs={3}>
                    <DisplayCard imageAddress='supertron.png'>
                        <Typography align='center' variant='h6' gutterBottom>
                            Supertron Infotech
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Project lead for making a chat bot and search engine for a local university's website
                            using React and MongoDB
                            <br/><br/>
                            Summer 2019
                        </Typography>
                    </DisplayCard>
                </Grid>


                <Grid item xs={3}>
                    <DisplayCard imageAddress='heritage.jpg'>
                        <Typography align='center' variant='h6' gutterBottom>
                            Heritage Institute of Technology
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Learned about missing value estimation from Professor Sujay Saha.
                            <br/><br/>
                            Spring 2018
                        </Typography>
                    </DisplayCard>
                </Grid>
            </Grid>
        </div>
    );
}
