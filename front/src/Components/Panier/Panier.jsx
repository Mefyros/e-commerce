import React from 'react';
import Axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { css } from 'emotion';
import EmptyCard from './components/Empty/Empty'
import FullCard from './components/Full/Full'

export default class Panier extends React.Component {

    render() {
        return(
            <>
                <React.Fragment>
                    <CssBaseline />
                    if empty -> show empty
                    <EmptyCard/>
                    <br/>
                    else -> show full
                    <Container maxWidth="md">
                        <FullCard/>
                    </Container>

                </React.Fragment>
            </>
        );
    }
}