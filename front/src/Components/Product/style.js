import { makeStyles } from '@material-ui/core/styles';
// import { jsx, css } from '@emotion/core';
import Color from '../Color';

export default makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
    zozio: {
      width: '100%',
      height: '100%',
    },

    paperpay: {
      marginTop: '50px',
      fontSize: '39px',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    paperdesc: {
      marginTop: '15px',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    paperprice: {
      marginTop: '34px',
      color: 'red',
      padding: theme.spacing(2),
      textAlign: 'center',
    },

    button: {
      backgroundColor: Color.madForMango,
      border: `solid 1px ${Color.lightGrey}`,
      borderRadius: 3,
      boxShadow: '-1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01)',
      padding: '.7em 1.1em',
  
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: Color.madForMangoHover,
        boxShadow: '-1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1)',
      },
    },
 }));