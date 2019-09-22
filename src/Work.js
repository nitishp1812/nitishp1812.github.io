import React from 'react';
import DisplayCard from './DisplayCard';

import { Typography, makeStyles, Grid } from '@material-ui/core';

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
    },
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
                      title='CS 125: Intro to CS' time='Aug 2019 - Present'
                      link='https://cs125.cs.illinois.edu/' linkText='Course Website'>
                        Course Developer for CS 125 (Intro to CS), the introductory course for Computer
                        Science taken by over 1000 students each semester. <br /> <br />
                        I am working with React.js and Gatsby to make changes and improve the lecture
                        slide tool. For this purpose, I am developing a modular code editing tool using 
                        Ace which can be embedded anywhere. Working with the CS 125 course development 
                        team for this. The team is akin to a campus education research group which is 
                        developing new and exciting technologies for a better and more immersive learning 
                        experience. <br /> <br />
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/timan.png'
                      title='TIMAN Research Group' time='Aug 2019 - Present'
                      link='http://sifaka.cs.uiuc.edu/ir/' linkText='Group Website'>
                        Undergraduate Researcher in the Data and Information Systems Research
                        Laboratory for the TIMAN group. <br /> <br />
                        I am working as a researcher in the Text Information Management
                        and Analysis (TIMAN) group under Professor ChengXiang Zhai. I am working to port the 
                        User-Centered Adaptive Information Retrieval (UCAIR) to a server-side model from
                        its current client-side infrastructure. I will also be experimenting to improve 
                        the relevance of the data presented to the user. <br /> <br />
                    </DisplayCard>
                </Grid>
                
                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/uiuc.jpg'
                      title='University of Illinois at Urbana-Champaign' time='Expected Dec. 2021'
                      link='https://illinois.edu/' linkText='University Website'>
                        B.S. (Computer Science) <br />
                        Economics Minor <br />
                        GPA: 3.96 <br />
                        Dean's List, James Scholar Honors Student <br /> <br />
                    </DisplayCard>
                </Grid>


                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/supertron.png'
                      title='Supertron Infotech' time='Summer 2019'
                      link='http://www.supertroninfotech.in/' linkText='Company Website'>
                        Developed a query-answering chat bot for a local university which is now used
                        by over 5000 applicants. <br /> <br />
                        I was the lead for this project and worked with the university officials to
                        design a chat bot for the university as per their requirements. I designed 
                        and developed the user interface for the bot using React.js and developed the 
                        back end and server using Node.js. I also designed a database in MongoDB for the 
                        bot to efficiently store the extracted query data to be used by the university 
                        officials. <br /> <br />
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/heritage.png'
                      title='Heritage Institute of Technology' time='Spring 2018'
                      link='https://www.heritageit.edu/' linkText='College Website'>
                        Learned about and extensively researched missing value estimation 
                        under the guidance of Professor Sujay Saha of the Heritage Institute of
                        Technology. <br /> <br />
                    </DisplayCard>
                </Grid>
            </Grid>
        </div>
    );
}
