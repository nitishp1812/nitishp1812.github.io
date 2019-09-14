import React, { useState } from 'react';

import { 
    makeStyles,
    ButtonBase,
    Typography,
    Modal,
    Grid,
    Paper
} from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: '350px',
        position: 'relative',
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $backdrop': {
                opacity: 0.75
            },
            '& $title': {
                border: '2px solid currentColor',
            },
        }
    },
    focusVisible: {},
    button: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
        padding: '0 15px 5px'
    },
    imageSource: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        padding: '10%'
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
    },
    title: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(1) + 6}px`,
    },
    popup: {
        position: 'absolute',
        width: isMobile ? '75%': '60%',
        backgroundColor: '#e0e0e0',
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3),
        top: '50%',
        left: isMobile ? '45%' : '50%',
        transform: 'translate(-50%, -50%)'
    },
    popupImage: {
        width: '100%',
        height: '100%'
    },
    popupContent: {
        marginLeft: '2%'
    },
    mobileImage: {
        width: '100%',
        height: '350px',
        position: 'relative'
    },
    mobileSource: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%'
    },
    paper: {
        background: '#f0f0f0',
        width: '300px',
        padding: '2px'
    }
}));

export default (props) => {
    const classes = useStyles();
    const [hidden, setHidden] = useState(true);
    const [open, setOpen] = useState(false);

    function openPopup() {
        if (!isMobile) {
            setHidden(true);
        }
        setOpen(true);
    }

    return isMobile ? (
        <div>
            <Paper className={classes.paper} elevation={3}>
                <ButtonBase className={classes.mobileImage} onClick={openPopup}>
                    <span className={classes.mobileSource}
                      style={{backgroundImage: `url(${props.imageAddress})`}} />
                    <span className={classes.backdrop} />
                </ButtonBase>
                <Typography variant='h6' align='center'>
                    {props.title}
                </Typography>
            </Paper>
            <Modal open={open} onClose={() => {setOpen(false)}}>
                <div className={classes.popup}>
                    <Grid container direction='row' spacing={0} alignItems='center'>
                        <Grid item xs={4}>
                            <img className={classes.popupImage} src={props.imageAddress} alt=''/>
                        </Grid>
                        <Grid className={classes.popupContent} item xs={7}>
                            <Typography variant='h4' align='center'>
                                {props.title}
                            </Typography>
                            <Typography variant='subtitle1' align='center' gutterBottom>
                                ({props.time})
                            </Typography>
                            <br />
                            <Typography variant='body1' align='center' paragraph>
                                {props.children}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Modal>
        </div>
    ) : (
        <div>
            <ButtonBase focusRipple className={classes.image} onClick={openPopup}
              focusVisibleClassName={classes.focusVisible}
              onMouseEnter={() => {setHidden(false)}} onMouseLeave={() => {setHidden(true)}}>
                <span className={classes.imageSource}
                  style={{backgroundImage: `url(${props.imageAddress})`}} />
                <span className={classes.backdrop} />
                <span className={classes.button}>
                    <Typography className={classes.title} hidden={hidden}
                      component='span' variant='subtitle1' color='#fff'>
                        {props.title}
                    </Typography>
                </span>
            </ButtonBase>
            <Modal open={open} onClose={() => {setOpen(false)}}>
                <div className={classes.popup}>
                    <Grid container direction='row' spacing={0} alignItems='center'>
                        <Grid item xs={4}>
                            <img className={classes.popupImage} src={props.imageAddress} alt=''/>
                        </Grid>
                        <Grid className={classes.popupContent} item xs={7}>
                            <Typography variant='h4' align='center'>
                                {props.title}
                            </Typography>
                            <Typography variant='subtitle1' align='center' gutterBottom>
                                ({props.time})
                            </Typography>
                            <br />
                            <Typography variant='body1' align='center' paragraph>
                                {props.children}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Modal>
        </div>
    );
}
