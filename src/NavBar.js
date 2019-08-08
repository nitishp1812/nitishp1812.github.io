import React from 'react';

import { makeStyles, AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#e0e0e0',
        color: '#000',
        padding: '0.5% 0%'
    },
    menuContent: {
        padding: '0 2% 0 0'
    },
    menuItem: {
        flexGrow: 1
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <AppBar position='sticky' className={classes.root}>
            <Toolbar>
                <Grid container className={classes.menuContent}
                  direction='row' alignItems='center' spacing={5} justify='center'>
                    <Grid item xs={6}></Grid>
                    <Grid item xs className={classes.menuItem}>
                        <Typography variant='h6' align='center'>
                            Home
                        </Typography>
                    </Grid>

                    <Grid item xs className={classes.menuItem}>
                        <Typography variant='h6' align='center'>
                            About Me
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant='h6' align='center'>
                            Work & Education
                        </Typography>
                    </Grid>

                    <Grid item xs>
                        <Typography variant='h6' align='center'>
                            Projects
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
