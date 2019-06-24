import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { css } from 'emotion';
import style from './style';

export default (props) => {
  return (
    <Paper elevation={0} className={css(style.root)}>
      <Breadcrumbs separator={<NavigateNextIcon className={css(style.separator)} fontSize="small" />}>
        <Link color="inherit" href="/" className={css(style.link)}>
          <HomeIcon className={css(style.icon)} /> Home
        </Link>

        {
          props.links.map((link, key) => (
            <Link
              key={key}
              color="inherit"
              href={link.url}
              className={css(style.link)}
            >
              {link.name}
            </Link>
          ))
        }

      </Breadcrumbs>
    </Paper>
  );
}

