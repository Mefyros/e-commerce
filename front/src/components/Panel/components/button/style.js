import { makeStyles } from '@material-ui/core/styles';
import Color from '../../../Color';

export default makeStyles({
  box: {
    margin: '2vh',
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
      // transform: 'scale(1.001)',
      boxShadow: '-1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1)',
    }
  },
});