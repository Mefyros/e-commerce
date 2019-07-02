import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { css }  from 'emotion';
import * as S from './style';

export default function Footer() {
    return (
        <div className={css(S.container)}>
            <AppBar className={css(S.footer)} position="static" color="default">
                <Toolbar className={css(S.tool)}>
                    <div className={css(S.typoFooter)}>
                        Privacy | Terms | API Policy | CSR | Sitemap
                    </div>
                    <div className={css(S.about)}>
                        <div className={css(S.aboutdiv)}>
                            <h3 className={css(S.title3)}> About Website</h3>
                            <div>
                                <a href='/' className={css(S.typoFooter2)}>About Us</a>
                                <a href='/' className={css(S.typoFooter2)}>Contact</a>
                                <a href='/' className={css(S.typoFooter2)}>Security</a>
                            </div>
                        </div>
                        <div>
                            <h3 className={css(S.title3)}> About Website</h3>
                            <div >
                                <a href='/' className={css(S.typoFooter2)}>Our Engagement</a>
                                <a href='/' className={css(S.typoFooter2)}>Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}