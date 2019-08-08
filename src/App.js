import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Work from './Work';
import theme from './theme';

import { MuiThemeProvider, makeStyles, Grid, Fade } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotesIcon from '@material-ui/icons/NotesTwoTone';

const useStyles = makeStyles({
    root: {
        background: '#c0c0c0'
    },
    linksContainer: {
        position: 'absolute',
        left: '50%',
        background: '#fff',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
        width: '500px',
        padding: '20px',
        zIndex: '+4',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)'
    }
});

const renderLinksContainer = (classes) => {
    return (
        <Grid className={classes.linksContainer} 
          container direction='row' alignItems='center' justify='center'>
            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <a href='mailto:npoddar2@illinois.edu'>
                        <MailIcon />
                    </a>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <a href='https://www.facebook.com/nitishpoddar99'>
                        <img src={require('./imgs/facebook.svg')} alt='facebook' />
                    </a>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <a href='https://www.linkedin.com/in/nitish-poddar-579497175/'>
                        <img src={require('./imgs/linkedin.svg')} alt='linkedin' />
                    </a>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <a href='https://github.com/nitishp1812'>
                        <img src={require('./imgs/github.svg')} alt='github' />
                    </a>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <a href='https://nitishp1812.github.io/data/Resume.pdf' target='_blank'>
                        <NotesIcon />
                    </a>
                </Fade>
            </Grid>
        </Grid>
    );
}

const App = () => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <NavBar />
                <Home />
                {renderLinksContainer(classes)}
                <About />
                <Work />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
