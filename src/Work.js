import React from 'react';
import DisplayCard from './DisplayCard';

import { Typography, makeStyles, Grid } from '@material-ui/core';

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

export default () => {
    const classes = useStyles();

    const direction = (isMobile) ? 'column' : 'row';
    const headingSize = isMobile ? 'h4' : 'h3';
    const cellSize = isMobile ? 10 : 4;

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
                    <DisplayCard imageAddress='/images/cs125.png'
                      title='CS 125: Intro to CS' time='Aug 2019 - Present'>
                        Course developer for CS 125 (Intro to CS), the introductory course for CS students.
                        Working in ReactJS with Gatsby to make changes and improve the lecture
                        slide tool. Developing a modular code editing tool using Ace which can be
                        embedded anywhere. <br /> <br />
                        <a className={classes.link}
                          href='https://cs125.cs.illinois.edu/' target='_blank'>
                          Course Website
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/timan.png'
                      title='TIMAN Research Group' time='Aug 2019 - Present'>
                        Undergraduate researcher in the Text Information Management
                        and Analysis (TIMAN) group under the Data and Information Systems Research
                        Laboratory (DAIS) under Professor ChengXiang Zhai. Working to port the User-Centered
                        Adaptive Information Retrieval (UCAIR) to a server-side model from a client-side
                        model. Will also be experimenting to improve the relevance of the data
                        presented to the user. <br /> <br />
                        <a className={classes.link}
                          href='http://sifaka.cs.uiuc.edu/ir/' target='_blank'>
                          Research Group Website
                        </a>
                    </DisplayCard>
                </Grid>
                
                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/uiuc.jpg'
                      title='University of Illinois at Urbana-Champaign' time='Expected Dec. 2021'>
                        B.S. (Computer Science) <br />
                        Minor in Economics <br />
                        GPA: 3.96 <br />
                        Dean's List, James Scholar Honors Student <br /> <br />
                        <a className={classes.link}
                          href='https://illinois.edu/' target='_blank'>
                          University Website
                        </a>
                    </DisplayCard>
                </Grid>


                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/supertron.png'
                      title='Supertron Infotech' time='Summer 2019'>
                        Project lead for making a query-answering chat bot for a local 
                        university's website. Designed and developed the user interface for
                        the bot using ReactJS and developed the back end and server using NodeJS.
                        Also designed the database for the bot to efficiently store user records
                        with MongoDB. <br /> <br />
                        <a className={classes.link}
                          href='http://www.supertroninfotech.in/' target='_blank'>
                          Company Website
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/heritage.png'
                      title='Heritage Institute of Technology' time='Spring 2018'>
                        Learned about and extensively researched missing value estimation 
                        under the guidance of Professor Sujay Saha of the Heritage Institute of
                        Technology. <br /> <br />
                        <a className={classes.link}
                          href='http://sifaka.cs.uiuc.edu/ir/proj/ucair/' target='_blank'>
                          College Website
                        </a>
                    </DisplayCard>
                </Grid>
            </Grid>
        </div>
    );
}
