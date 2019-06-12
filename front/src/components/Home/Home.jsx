import React from 'react';
import Card from './components/Card/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from './style';

import products from './fake_product';

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