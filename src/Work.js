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
                    <DisplayCard imageAddress='/images/uiuc.jpg'
                      title='University of Illinois at Urbana-Champaign' time='Class of 2022'>
                        Bachelor of Science (Computer Science)<br/>
                        Minor (Statistics)
                    </DisplayCard>
                </Grid>


                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/supertron.png'
                      title='Supertron Infotech' time='Summer 2019'>
                        Project lead for making a query-answering chat bot for a local 
                        university's website. Designed and developed the user interface for
                        the bot using ReactJS and developed the back end and server using NodeJS.
                        Also designed the database for the bot to efficiently store user records
                        with MongoDB.
                    </DisplayCard>
                </Grid>

                <Grid item xs={cellSize}>
                    <DisplayCard imageAddress='/images/heritage.png'
                      title='Heritage Institute of Technology' time='Spring 2018'>
                        Learned about and extensively researched missing value estimation 
                        under the guidance of Professor Sujay Saha of the Heritage Institute of
                        Technology.
                    </DisplayCard>
                </Grid>
            </Grid>
        </div>
    );
}
