import React from 'react';
import DisplayCard from './DisplayCard';

import { makeStyles, Grid, Typography } from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: isMobile ? '0 0 8% 0' : '0 15% 8% 15%',
        alignItems: 'center',
        alignContent: 'center'
    },
    heading: {
        marginBottom: isMobile ? '15%' : '5%'
    },
    container: {
        paddingLeft: '2%'
    }
}));

export default () =>  {
    const classes = useStyles();

    const direction = (isMobile) ? 'column' : 'row';
    const headingSize = isMobile ? 'h4' : 'h3';
    const cellSize = isMobile ? 10 : 4;

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant={headingSize} align='center' gutterBottom>
                Projects
            </Typography>

            <div>
            <Grid container className={classes.container}
              justify='center' alignItems='center' spacing={10} direction={direction}>
                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='zip.png'>
                        <Typography align='center' variant='h6' gutterBottom>
                            Compression Library
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Working on a data compression library using C++. Will be deploying its mobile app using React Native. 
                            <br/><br/>
                            Aug 2019 - Present
                        </Typography>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='chat.png'>
                        <Typography align='center' variant='h6' gutterBottom>
                            Chat Server
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Developed a chat server using the MQTT protocol through the EMQ broker using Erlang and Mnesia DB.
                            <br/><br/>
                            Jul 2019 - Aug 2019
                        </Typography>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='asl.jpg'>
                        <Typography align='center' variant='h6' gutterBottom>
                            Gesture Recognition
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Implemented American Sign Language (ASL) gesture recognition in Python using a neural network.
                            <br/><br/>
                            Apr 2019 - Jun 2019
                        </Typography>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='chatbot.jpg'>
                        <Typography align='center' variant='h6' gutterBottom>
                            Chat Bot
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Developed a conversational chat bot using the encoder decoder model and deployed it using Android.
                            <br/><br/>
                            Nov 2018 - Dec 2018
                        </Typography>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='calculator.png'>
                        <Typography align='center' variant='h6' gutterBottom>
                            NCalculator
                        </Typography>
                        <Typography align='center' variant='body2'>
                            Developed an Android app for a scientific calculator with graph plotting, matrix calculation and calculus capabilites.
                            <br/><br/>
                            Jun 2017 - Jul 2017
                        </Typography>
                    </DisplayCard>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
