import React from 'react';
import Card from './components/Card/Card';
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

const products = [
    {
        id: 1,
        price: 42,
        name: "Petit oisal",
    },
    {
        id: 2,
        price: 42,
        name: "Petit oisal",
    },
    {
        id: 3,
        price: 42,
        name: "Petit oisal",
    },
    {
        id: 4,
        price: 42,
        name: "Petit oisal",
    },
    {
        id: 5,
        price: 42,
        name: "Petit oisal",
    },
];

export default () => {
    const classes = useStyles();
    return(
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg" className={classes.container}>
                    {
                        products.map((product, key) => <Card key={key} product={product}/>)
                    }
                </Container>
            </React.Fragment>
        </>
        );
    }