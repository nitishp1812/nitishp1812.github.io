import React, { Component } from 'react';
import Home from './Home';
import Links from './Links';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import theme from './theme';

import { MuiThemeProvider, AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import scrollToComponent from 'react-scroll-to-component';

export default class extends Component {
    NavBar = () => {
        const options = {
            offset: -100,
            align: 'top',
            duration: 1500
        };

        const isMobile = window.innerWidth <= 500;
        const navSize = (isMobile) ? 'body1' : 'h6';
        const navBarPadding = (isMobile) ? '1% 0' : '0.5% 0'
        const navSpacing = (isMobile) ? 2 : 5

        return (
            <AppBar position='sticky' style={{background: '#e0e0e0', color: '#000', padding: {navBarPadding}}}>
                <Toolbar>
                    <Grid container style={{paddingRight: '2%'}}
                      direction='row' alignItems='center' spacing={navSpacing} justify='center'>
                        {(isMobile) ? null : <Grid item xs={6}></Grid>}
                        <Grid item xs>
                            <Typography variant={navSize} align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.homeRef, options)}}>
                                Home
                            </Typography>
                        </Grid>

                        <Grid item xs>
                            <Typography variant={navSize} align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.aboutRef, {...options, offset: -30})}}>
                                About Me
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant={navSize} align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.workRef, options)}}>
                                Work & Education
                            </Typography>
                        </Grid>

                        <Grid item xs>
                            <Typography variant={navSize} align='center' style={{cursor: 'pointer'}}
                              onClick={() => {scrollToComponent(this.projectsRef, options)}}>
                                Projects
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
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
