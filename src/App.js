import React from 'react';
import Home from './Home';
import About from './About';
import theme from './theme';

import { MuiThemeProvider, makeStyles, Grid } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotesIcon from '@material-ui/icons/NotesTwoTone';

const useStyles = makeStyles({
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

const App = () => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Home />
                <Grid className={classes.linksContainer} 
                  container direction='row' alignItems='center' justify='center'>
                    <Grid item xs>
                        <a href='mailto:npoddar2@illinois.edu'>
                            <MailIcon />
                        </a>
                    </Grid>

                    <Grid item xs>
                        <a href='https://www.facebook.com/nitishpoddar99'>
                            <img src={require('./imgs/facebook.svg')} alt='facebook' />
                        </a>
                    </Grid>

                    <Grid item xs>
                        <a href='https://www.linkedin.com/in/nitish-poddar-579497175/'>
                            <img src={require('./imgs/linkedin.svg')} alt='linkedin' />
                        </a>
                    </Grid>

                    <Grid item xs>
                        <a href='https://github.com/nitishp1812'>
                            <img src={require('./imgs/github.svg')} alt='github' />
                        </a>
                    </Grid>

                    <Grid item xs>
                        <a href='https://nitishp1812.github.io/data/Resume.pdf' target='_blank'>
                            <NotesIcon />
                        </a>
                    </Grid>
                </Grid>
                <About />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
