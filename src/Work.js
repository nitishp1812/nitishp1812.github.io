import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: '0 4% 8% 4%'
    },
    heading: {
        margin: '0 0 5% 5%'
    },
}));

const Work = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant='h3' gutterBottom align='left'>
                Education and Work
            </Typography>
        </div>
    );
}

export default Work;
