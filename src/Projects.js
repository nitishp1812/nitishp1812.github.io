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
    },
    link: {
      '&:link': {
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: '#555',
        padding: '10px',
        border: '1px solid #ccc'
      },
      '&:visited': {
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: '#888',
        padding: '10px',
        border: '1px solid #ccc'
      },
      '&:hover': {
        color: '#fff',
        textDecoration: 'none',
        backgroundColor: '#bbb',
        padding: '10px',
        border: '1px solid #ccc'
      },
      '&:active': {
        color: '#000',
        textDecoration: 'none',
        backgroundColor: '#e0e0e0',
        padding: '10px',
        border: '1px solid #ccc'
      }
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
                      title='UCAIR' time='Aug 2019 - Present'>
                        I am working with Professor ChengXiang Zhai to port the User-Centered Adapative
                        Information Retrieval (UCAIR) project from a client-side model to a
                        server-side model. The project is a next-generation search engine which was
                        developed using Java and optimizes the search results according to each individual
                        user. I will also be experimenting with the recommendation engine to improve the
                        search results. <br /> <br />
                        <a className={classes.link}
                          href='http://sifaka.cs.uiuc.edu/ir/proj/ucair/' target='_blank'>
                          Project Website
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/zip.png'
                      title='Compression Library' time='Aug 2019 - Present'>
                        I am working on a data compression library using C++. I am implementing data 
                        compression algorithms like Huffman Coding, LZW Compression among other such 
                        compression algorithms. I will be developing and deploying its mobile app with 
                        an interface for using the algorithms using React Native. <br /> <br />
                        <a className={classes.link}
                          href='https://github.com/nitishp1812/data-compression' target='_blank'>
                            GitHub
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/asl.png'
                      title='Gesture Recognition' time='Apr 2019 - Jun 2019'>
                        I implemented a convolutional neural network targeted towards recognizing gestures
                        for the American Sign Language (ASL). For this, I determined the architecture and 
                        hyperparameters of the neural network through experimentation and trial and error. 
                        I used OpenCV for the image preprocessing to recognize the hand from the webcam 
                        image. <br /> <br />
                        <a className={classes.link}
                          href='https://github.com/nitishp1812/gesture-recognition' target='_blank'>
                            GitHub
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/chatbot.png'
                      title='Chat Bot' time='Nov 2018 - Dec 2018'>
                        I developed a conversational chat bot using the encoder decoder model given in 
                        the paper 'A Neural Conversational Model' by Vinyals et al. I built an API 
                        for the model in Python using Flask and also designed the user interface in Android 
                        to call the API and enable user interaction. <br /> <br />
                        <a className={classes.link}
                          href='https://github.com/HarshitBagla/Chatbot' target='_blank'>
                            GitHub
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard
                      imageAddress='/images/calculator.png'
                      title='NCalculator' time='Jun 2017 - Jul 2017'>
                        I developed an Android app for a scientific calculator with capabilities for
                        plotting graphs, doing matrix calculations while also adding capabilities
                        for calculus allowing integration and differentiation. <br /> <br />
                        <a className={classes.link}
                          href='https://github.com/nitishp1812/NCalculator' target='_blank'>
                            GitHub
                        </a>
                        <a className={classes.link}
                          href='https://play.google.com/store/apps/details?id=nitishpoddar1812.calculator' target='_blank'>
                            PlayStore
                        </a>
                    </DisplayCard>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}
