import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { css }  from 'emotion';
import style from './style';

export default function Footer() {
    return (
        <div className={css(style.container)}>
            <AppBar className={css(style.footer)} position="static" color="default">
                <Toolbar className={css(style.tool)}>
                    <div className={css(style.typoFooter)}>
                        Privacy | Terms | API Policy | CSR | Sitemap
                    </div>
                    <div className={css(style.about)}>
                        <div className={css(style.aboutdiv)}>
                            <h3 className={css(style.title3)}> About Website</h3>
                            <div>
                                <a href='#' className={css(style.typoFooter2)}>About Us</a>
                                <a href='#' className={css(style.typoFooter2)}>Contact</a>
                                <a href='#' className={css(style.typoFooter2)}>Security</a>
                            </div>
                        </div>
                        <div>
                            <h3 className={css(style.title3)}> About Website</h3>
                            <div >
                                <a href='#' className={css(style.typoFooter2)}>Our Engagement</a>
                                <a href='#' className={css(style.typoFooter2)}>Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}