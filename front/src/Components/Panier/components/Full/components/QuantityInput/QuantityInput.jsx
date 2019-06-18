import React from 'react';
import TextField from "@material-ui/core/TextField";

export default class QuantityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handleChange = e => {
        this.setState({ quantity: parseInt(e.target.value) });
    }

    render() {
        const { quantity } = this.props;

        return (
            <TextField
                id="standard-number"
                value={quantity}
                onChange={this.handleChange}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
        );
    }
}