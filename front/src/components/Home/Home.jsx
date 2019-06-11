import React from 'react';
import Card from './components/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
  }));

export default () => {
    const classes = useStyles();
    return(
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg" className={classes.container}>
                    <Card />
                    <Card />
                    <Card />
                    <Card/>
                <Card/>

                </Container>
            </React.Fragment>
        </>
        );
    }