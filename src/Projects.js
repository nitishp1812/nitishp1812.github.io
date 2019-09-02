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
                    <DisplayCard
                      imageAddress='/images/zip.png'
                      title='Compression Library' time='Aug 2019-Present'>
                        Working on a data compression library using C++. Implementing
                        data compression algorithms like Huffman Coding, LZW Compression.
                        Will be deploying its mobile app with an interface for using the 
                        algorithms using React Native. 
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/chat.png'
                      title='Chat Server' time='Jun 2019 - Aug 2019'>
                        Developed an instant messaging server in Go using websocket connections between 
                        the client and server. Tested it using JavaScript and HTML.
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/asl.png'
                      title='Gesture Recognition' time='Apr 2019 - Jun 2019'>
                        Implemented a neural network targeted towards recognizing gestures for the
                        American Sign Language (ASL) based on the model given in the paper 'Using​ ​Deep​ 
                        Convolutional​ ​Networks​ ​for Gesture​ ​Recognition​ ​in​ ​American​ ​Sign​ ​Language' by
                        Bheda et al.
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/chatbot.png'
                      title='Chat Bot' time='Nov 2018 - Dec 2018'>
                        Developed a conversational chat bot using the encoder decoder model given in 
                        the paper 'A Neural Conversational Model' by Vinyals et al. Built an API 
                        for the model in Python using Flask. Designed a user interface in Android 
                        to call the API and enable user interaction.
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/calculator.png'
                      title='NCalculator' time='Jun 2017 - Jul 2017'>
                        Developed an Android app for a scientific calculator with capabilities for
                        plotting graphs, doing matrix calculations while also adding capabilities
                        for calculus allowing integration and differentiation.
                    </DisplayCard>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
