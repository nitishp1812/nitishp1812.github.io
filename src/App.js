import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Links from './Links';
import About from './About';
import Work from './Work';
import theme from './theme';

import { MuiThemeProvider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: '#c0c0c0'
    }
});

export default () => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <NavBar />
                <Home />
                <Links />
                <About />
                <Work />
            </div>
        </MuiThemeProvider>
    );
}
