import React from 'react';
import DisplayCard from './DisplayCard';

import { makeStyles, Grid, Typography } from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    root: {
        // background: '#c0c0c0',
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
                      imageAddress='/images/ucair.png'
                      title='UCAIR' time='Aug 2019 - Present'
                      link='http://sifaka.cs.uiuc.edu/ir/proj/ucair/' linkText='Project Website'>
                        UCAIR is a next-generation search engine which can optimize search results 
                        according to the individual preferences of each user. <br /> <br />
                        I am working with Professor ChengXiang Zhai to port the User-Centered Adapative
                        Information Retrieval (UCAIR) project from a client-side model to a
                        server-side model. I will also be experimenting with the recommendation engine 
                        to improve the search results. <br /> <br />
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/zip.png'
                      title='Compression Library' time='Aug 2019 - Present'
                      link='https://github.com/nitishp1812/data-compression' linkText='GitHub'>
                        Building a data compression library using C++. <br /><br />
                        I am implementing data compression algorithms like Huffman Coding and 
                        LZW Compression among other compression algorithms. I will also be 
                        developing and deploying its mobile app suign React Native to provide 
                        an interface for using the algorithms. <br /> <br />
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/asl.png'
                      title='Gesture Recognition' time='Apr 2019 - Jun 2019'
                      link='https://github.com/nitishp1812/gesture-recognition' linkText='GitHub'>
                        Developed a gesture recognition engine targeted towards recognizing gestures for
                        the American Sign Language (ASL). <br /> <br />
                        For this purpose, I implemented a convolutional neural network in Python using the
                        Keras library. I also determined the architecture and the hyperparameters for 
                        training the neural network through experimentation and trial and error. 
                        I used OpenCV for the image preprocessing to recognize the hand from the webcam 
                        image. <br /> <br />
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/chatbot.png'
                      title='Chat Bot' time='Nov 2018 - Dec 2018'
                      link='https://github.com/HarshitBagla/Chatbot' linkText='GitHub'>
                        Built a chat bot which can casually converse with its users. <br /> <br />
                        I developed it using the encoder decoder model specified in the paper 'A 
                        Neural Conversational Model' by Vinyals et al. I built an API for the model
                        in Python using Flask while also designing the user interface in Android 
                        to call the API and enable user interaction. <br /> <br />
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/calculator.png'
                      title='NCalculator' time='Jun 2017 - Jul 2017'
                      link='https://play.google.com/store/apps/details?id=nitishpoddar1812.calculator' linkText='PlayStore'>
                        NCalculator is a scientific calculator with capabilities for plotting graphs
                        alongside regular scientific calculations. It can also perform matrix
                        calculations while having functions for integration and differentiation.
                        <br /> <br />
                    </DisplayCard>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
