import React from 'react';

import { makeStyles, Card, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: '250px'
    },
    content: {
        height: '160px'
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
            <CardContent className={classes.content}>
                {props.children}
            </CardContent>
        </Card>
    );
}
