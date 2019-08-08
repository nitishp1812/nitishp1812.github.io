import React from 'react';

import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#c0c0c0',
        padding: '0 4% 8% 4%'
    },
    heading: {
        margin: '0 0 5% 5%'
    },
    container: {
        paddingLeft: '2%'
    },
    imageContainer: {
        position: 'relative',
        display: 'block',
        textAlign: 'left',
        padding: '0 2%'
    },
    image: {
        borderRadius: '25%',
        width: '100%',
        left: '75%'
    },
    descContainer: {
        marginTop: '2%'
    }
}));

const Work = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant='h3' gutterBottom align='left'>
                Work & Education
            </Typography>

            <Grid container className={classes.container} 
              direction='column' justify='center' alignItems='center' spacing={5}>

                <Grid container item xs direction='row'>
                    <Grid item xs={2} className={classes.imageContainer}>
                        <img className={classes.image} src={require('./imgs/uiuc.jpg')} alt='Illinois' />
                    </Grid>

                    <Grid item xs={10} className={classes.descContainer}>
                        <Typography variant='h5' align='left'>
                            University of Illinois at Urbana-Champaign
                        </Typography>

                        <Typography variant='body1' align='left'>
                            B.Sc (Computer Science)
                            <br/>
                            Class of 2022
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container item xs direction='row'>
                    <Grid item xs={2} className={classes.imageContainer}>
                        <img className={classes.image} src={require('./imgs/supertron.png')} alt='Illinois' />
                    </Grid>

                    <Grid item xs={10} className={classes.descContainer}>
                        <Typography variant='h5' align='left'>
                            Supertron Infotech Pvt. Ltd.
                        </Typography>

                        <Typography variant='body1' align='left'>
                            Web Developer, Project Lead
                            <br/>
                            Summer 2019
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container item xs direction='row'>
                    <Grid item xs={2} className={classes.imageContainer}>
                        <img className={classes.image} src={require('./imgs/heritage.jpeg')} alt='Illinois' />
                    </Grid>

                    <Grid item xs={10} className={classes.descContainer}>
                        <Typography variant='h5' align='left'>
                            The Heritage School
                        </Typography>

                        <Typography variant='body1' align='left'>
                            ISC/ICSE
                            <br/>
                            Class of 2018
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Work;
