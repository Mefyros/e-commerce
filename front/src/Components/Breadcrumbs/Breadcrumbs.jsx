import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function BreadcrumbsMain() {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.root}>
            <Breadcrumbs aria-label="Breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Home
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    className={classes.link}
                >
                    Class
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    className={classes.link}
                >
                    Category
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    className={classes.link}
                >
                    Sub-Category
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    className={classes.link}
                >
                    articles
                </Link>

            </Breadcrumbs>
        </Paper>
    );
}

