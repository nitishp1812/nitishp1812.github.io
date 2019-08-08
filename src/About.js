import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';;

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: '8% 4%',
        color: '#000',
    },
    heading: {
        margin: '0 2.5% 5% 2.5%'
    },
    content: {
        margin: '0% 10%'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant='h3' align='center' gutterBottom>
                About Me
            </Typography>
            <Typography className={classes.content} variant='h5' align='center' paragraph>
                Hi! My name is Nitish Poddar. I am a Computer Science major at the University of
                Illinois at Urbana-Champaign and am currently a sophomore.
            </Typography>
            <br/><br/>
            <Typography className={classes.content} variant='h5' align='center' paragraph>
                I am an enthusiastic software developer, and I primarily try to develop applications
                that can help its users in some way. I am also greatlyinterested in the fields of 
                Data Science and Machine Learning. Recently, the fieldsof Computer Networking and
                Cloud Computing have also begun to pique my attention.
            </Typography>
            <br/><br/>
            <Typography className={classes.content} variant='h5' align='center' paragraph>
                I am also a great soccer fan and avidly follow Arsenal F.C. while also being an
                enthusiastic hip-hop dancer.
            </Typography>
        </div>
    );
}
