import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    // console.log(props.max)
    const max = parseInt(props.max);
    const [value, setValue] = React.useState([1,100]);
    // console.log(value)
    let ValuePrice = value;
    return  ValuePrice;
    // setValue([1, max]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Slider
                min={1}
                max={props.max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
