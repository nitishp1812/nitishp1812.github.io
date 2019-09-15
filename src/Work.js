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
                        I am a course developer for CS 125 (Intro to CS), the introductory course for Computer.
                        Science. I am working in React.js with Gatsby to make changes and improve the lecture
                        slide tool which will be used by 1000+ students each semester. For this purpose, I am
                        developing a modular code editing tool using Ace which can be embedded anywhere. The CS
                        125 course development team is akin to a campus education research group which is
                        developing new and exciting technologies for a better and more immersive learning 
                        experience.<br /> <br />
                        <a className={classes.link}
                          href='https://cs125.cs.illinois.edu/' target='_blank'>
                          Course Website
                        </a>
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/timan.png'
                      title='TIMAN Research Group' time='Aug 2019 - Present'>
                        I am unndergraduate researcher in the Text Information Management
                        and Analysis (TIMAN) group under the Data and Information Systems Research
                        Laboratory (DAIS) under Professor ChengXiang Zhai. I am working to port the 
                        User-Centere Adaptive Information Retrieval (UCAIR) to a server-side model from
                        its current client-side infrastructure. I will also be experimenting to improve 
                        the relevance of the data presented to the user. <br /> <br />
                        <a className={classes.link}
                          href='http://sifaka.cs.uiuc.edu/ir/' target='_blank'>
                          Group Website
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
                        I was the project lead for making a query-answering chat bot for a local 
                        university which is now used by 5000+ applicants to the university. I designed 
                        and developed the user interface for the bot using React.js and developed the 
                        back end and server using Node.js. I also designed a database in MongoDb for the 
                        bot to efficiently store the extracted query data to be used by the university 
                        officials. <br /> <br />
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
