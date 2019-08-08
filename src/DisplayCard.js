import React from 'react';

import { makeStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: '250px'
    }
}));

export default (props) => {
    const classes = useStyles();
    const images = require.context('./imgs', true);
    const logo = images('./' + props.imageAddress);

    return (
        <Card>
            <CardMedia
              className={classes.image}
              image={logo} />
            <CardContent>
                <Typography variant='body1' align='left' gutterBottom>
                    {props.heading}
                </Typography>
                <Typography variant='body2' align='left' gutterBottom>
                    {props.children}
                </Typography>
            </CardContent>
        </Card>
    );
}
