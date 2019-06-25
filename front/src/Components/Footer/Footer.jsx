import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { css }  from 'emotion';
import { footer, title3, typoFooter, typoFooter2, Tool, about, aboutdiv } from './style';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={css(footer)} position="static" color="default">
                <Toolbar className={css(Tool)}>
                    <div className={css(typoFooter)}>
                        Privacy | Terms | API Policy | CSR | Sitemap
                    </div>
                    <div className={css(about)}>
                        <div className={css(aboutdiv)}>
                            <h3 className={css(title3)}> About Website</h3>
                            <div>
                                <a href='#' className={css(typoFooter2)}>About Us</a>
                                <a href='#' className={css(typoFooter2)}>Contact</a>
                                <a href='#' className={css(typoFooter2)}>Security</a>
                            </div>
                        </div>
                        <div>
                            <h3 className={css(title3)}> About Website</h3>
                            <div >
                                <a href='#' className={css(typoFooter2)}>Our Engagement</a>
                                <a href='#' className={css(typoFooter2)}>Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}