import React from 'react';
import DisplayCard from './DisplayCard';

import { Typography, makeStyles, Grid } from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: isMobile ? '0 0 8% 0' : '0 4% 8% 4%'
    },
    heading: {
        marginBottom: isMobile ? '15%' : '5%'
    },
    container: {
        paddingLeft: '2%'
    }
}));

export default () => {
    const classes = useStyles();

    const direction = (isMobile) ? 'column' : 'row';
    const headingSize = isMobile ? 'h4' : 'h3';
    const cellSize = isMobile ? 10 : 3;

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant={headingSize} gutterBottom align='center'>
                Work & Education
            </Typography>

            <Grid container className={classes.container}
              direction={direction}
              justify='center' 
              alignItems='center' 
              spacing={10}>

                <Grid item xs={cellSize}>
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
                    {/* <img className={classes.image} src={require('./imgs/uiuc.jpg')} */}
                </Grid>


                <Grid item xs={cellSize}>
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


                <Grid item xs={cellSize}>
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
