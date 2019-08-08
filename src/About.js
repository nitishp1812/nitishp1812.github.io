import React from 'react';

import { makeStyles, Typography, Fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: '8% 4%',
        color: '#000',
    },
    heading: {
        marginLeft: '5%',
        marginBottom: '5%'
    },
    content: {
        marginLeft: '5%'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={3500}>
                <div>
                    <Typography className={classes.heading} variant='h3' align='left' gutterBottom>
                        About Me
                    </Typography>
                    <Typography className={classes.content} variant='h5' align='left' paragraph>
                        Hi! My name is Nitish Poddar. I am a Computer Science major at the University of
                        Illinois at Urbana-Champaign.
                    </Typography>
                </div>
            </Fade>
        </div>
    );
}
