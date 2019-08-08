import React from 'react';

import { Typography, makeStyles, Grid, Card, CardMedia, CardContent, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: '0 4% 8% 4%'
    },
    heading: {
        marginBottom: '5%'
    },
    container: {
        paddingLeft: '2%'
    },
    image: {
        width: '100%',
        height: '250px'
    }
}));

const WorkCard = (props) => {
    const classes = useStyles();
    const images = require.context('./imgs', true);
    let logo = images('./' + props.imageAddress);

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

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant='h3' gutterBottom align='center'>
                Work & Education
            </Typography>

            <Grid container className={classes.container} 
              justify='center' 
              alignItems='center' 
              spacing={5}>

                <Grid item xs>
                    <WorkCard imageAddress='uiuc.jpg' heading='University of Illinois at Urbana-Champaign'>
                        B.Sc (Computer Science)
                        <br/>
                        Class of 2022
                    </WorkCard>
                </Grid>


                <Grid tem xs>
                    <WorkCard imageAddress='supertron.png' heading='Supertron Infotech Pvt. Ltd.'>
                        Web Developer, Project Lead
                        <br/>
                        Summer 2019
                    </WorkCard>
                </Grid>


                <Grid item xs>
                    <WorkCard imageAddress='heritage.jpg' heading='Heritage Institute of Technology'>
                        Research Assistant
                        <br/>
                        Spring 2018
                    </WorkCard>
                </Grid>
            </Grid>
        </div>
    );
}
