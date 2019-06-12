import React from 'react';
import Button from './components/button/button';

export default class Panel extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <>
                <Button name="Add new product" action="/product/create"/>
                <Button name="Edit" action="/product/1/edit"/>
                <Button name="Delete"/>
            </>
        );
    }
}