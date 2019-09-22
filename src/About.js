import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    root: {
        // background: '#c0c0c0',
        padding: isMobile ? '10% 4%' : '8% 4%',
        color: '#000',
        marginTop: (isMobile) ? '10%' : '0'
    },
    heading: {
        margin: '0 2.5% 5% 2.5%'
    },
    content: {
        margin: (isMobile) ? '0 2%' : '0% 10%'
    }
}));

export default () => {
    const classes = useStyles();

    const headingSize = (isMobile) ? 'h4' : 'h3';
    const contentSize = (isMobile) ? 'h6' : 'h5';

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant={headingSize} align='center' gutterBottom>
                About Me
            </Typography>
            <Typography className={classes.content} variant={contentSize} align='center' paragraph>
                Hi! My name is Nitish Poddar. I am a sophomore at the University of
                Illinois at Urbana-Champaign majoring in Computer Science with a minor in Economics.
            </Typography>
            <br/><br/>
            <Typography className={classes.content} variant={contentSize} align='center' paragraph>
                I am an enthusiastic software developer with a passion for developing software
                that can help its users in some way. I am also a Data Science and Machine Learning
                aficionado, constantly experimenting with and keeping up to date with the latest 
                developments in the industry.
            </Typography>
            <br/><br/>
            <Typography className={classes.content} variant={contentSize} align='center' paragraph>
                In addition to this, I am also an enthusiastic hip-hop dancer and a huge soccer fan
                and avidly follow Arsenal F.C.
            </Typography>
        </div>
    );
}
