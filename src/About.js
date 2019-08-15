import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
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
                Hi! My name is Nitish Poddar. I am a Computer Science major at the University of
                Illinois at Urbana-Champaign and am currently a sophomore.
            </Typography>
            <br/><br/>
            <Typography className={classes.content} variant={contentSize} align='center' paragraph>
                I am an enthusiastic software developer, and I primarily try to develop applications
                that can help its users in some way. I am also greatly interested in the fields of 
                Data Science and Machine Learning. Recently, the fields of Computer Networking and
                Cloud Computing have also begun to pique my attention.
            </Typography>
            <br/><br/>
            <Typography className={classes.content} variant={contentSize} align='center' paragraph>
                I am also a great soccer fan and avidly follow Arsenal F.C. while also being an
                enthusiastic hip-hop dancer.
            </Typography>
        </div>
    );
}
