import { makeStyles } from '@material-ui/core/styles';
import Color from '../Color';

export default makeStyles({
    header: {
      flexGrow: 1,
      position: 'fixed',
      boxShadow: '-1px 1px 5px 1px rgba(0,0,0,.25)',
    },
    button: {
      borderRadius: 0,

      '&:hover': {
        backgroundColor: 'transparent',
        transform: 'scale(1.05)',
        textDecoration: 'underline',
      }
    },
});