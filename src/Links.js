import React, { useState } from 'react';

import { Grid, Fade, makeStyles, Typography, Popper, Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotesIcon from '@material-ui/icons/NotesTwoTone';

const resume = require('./data/Resume.pdf');

const useStyles = makeStyles(theme => ({
    linksContainer: {
        position: 'absolute',
        left: '50%',
        background: '#fff',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
        width: '500px',
        padding: '20px',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)'
    },
    desc: {
        background: '#fff',
        opacity: 1
    },
    typography: {
        padding: theme.spacing(1),
    }
}));

const Link = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = props.classes;

    function handlePopoverOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handlePopoverClose() {
        setAnchorEl(null);
    }

    let link = props.link;
    if (props.name === 'My Resume') {
        link = resume;
    }

    const open = Boolean(anchorEl);
    const id = open ? 'desc-popper' : undefined;

    return (
        <Fade in={true} timeout={3500}>
            <div>
                <a href={link}
                  target='_blank'
                  aria-describedby={id}
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}>
                    {props.children}
                </a>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper elevation={12} className={classes.desc}>
                                <Typography className={classes.typography}>
                                    {props.name}
                                </Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        </Fade>
    );
}

export default () => {
    const classes = useStyles();

    return (
        <Grid className={classes.linksContainer} 
          container direction='row' alignItems='center' justify='center'>
            <Grid item xs>
                <Link name='Email' link='mailto:npoddar2@illinois.edu' classes={classes}>
                    <MailIcon />
                </Link>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <Link name='Facebook' link='https://www.facebook.com/nitishpoddar99' classes={classes}>
                        <img src={require('./imgs/facebook.svg')} alt='facebook' />
                    </Link>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <Link name='LinkedIn' link='https://www.linkedin.com/in/nitish-poddar-579497175/' classes={classes}>
                        <img src={require('./imgs/linkedin.svg')} alt='linkedin' />
                    </Link>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <Link name='GitHub' link='https://github.com/nitishp1812' classes={classes}>
                        <img src={require('./imgs/github.svg')} alt='github' />
                    </Link>
                </Fade>
            </Grid>

            <Grid item xs>
                <Fade in={true} timeout={3500}>
                    <Link name='My Resume' link='https://nitishp1812.github.io/data/Resume.pdf' classes={classes}>
                        <NotesIcon />
                    </Link>
                </Fade>
            </Grid>
        </Grid>
    );
}
