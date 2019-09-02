import React, { Component } from 'react';
import Home from './Home';
import Links from './Links';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import theme from './theme';

import { 
    MuiThemeProvider,
    AppBar,
    Toolbar,
    Grid,
    Typography,
    SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import scrollToComponent from 'react-scroll-to-component';

export default class extends Component {
    state = {
        open: false
    }

    NavBar = () => {
        const options = {
            offset: -100,
            align: 'top',
            duration: 1500
        };

        const isMobile = window.innerWidth <= 500;

        const bar = (isMobile) ? (
            <div>
                <AppBar position='sticky'>
                    <Toolbar>
                        <MenuIcon onClick={this.setState(true)} />
                        <SwipeableDrawer open={this.state.open}
                          onClose={this.setState(false)} onOpen={this.setState(true)}>
                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {this.setState(false);scrollToComponent(this.homeRef, options)}}>
                                Home
                            </Typography>

                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {this.setState(false);scrollToComponent(this.aboutRef, {...options, offset: -30})}}>
                                About Me
                            </Typography>

                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {this.setState(false);scrollToComponent(this.workRef, options)}}>
                                Work & Education
                            </Typography>

                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {this.setState(false);scrollToComponent(this.projectsRef, options)}}>
                                Projects
                            </Typography>
                        </SwipeableDrawer>
                    </Toolbar>
                </AppBar>
            </div>
        ) : (
            <AppBar position='sticky' style={{background: '#e0e0e0', color: '#000', padding: '0.5% 0'}}>
                <Toolbar>
                    <Grid container style={{paddingRight: '2%'}}
                      direction='row' alignItems='center' spacing={4} justify='center'>
                        <Typography style={{flexGrow: 5}}></Typography>
                        <Grid item xs>
                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.homeRef, options)}}>
                                Home
                            </Typography>
                        </Grid>

                        <Grid item xs>
                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.aboutRef, {...options, offset: -30})}}>
                                About Me
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.workRef, options)}}>
                                Work & Education
                            </Typography>
                        </Grid>

                        <Grid item xs>
                            <Typography variant='h6' align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.projectsRef, options)}}>
                                Projects
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );

        return bar;
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div style={{background: '#c0c0c0'}}>
                <this.NavBar />
                    <section ref={(section) => {this.homeRef = section;}}>
                        <Home />
                    </section>
                    <Links />
                    <section ref={(section) => {this.aboutRef = section;}}>
                        <About />
                    </section>
                    <section ref={(section) => {this.workRef = section;}}>
                        <Work />
                    </section>
                    <section ref={(section) => {this.projectsRef = section;}}>
                        <Projects />
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
}
