import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    card: {
      width: 300,
      borderRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      margin: '2vh',
      boxShadow: '-1px 1px 10px 1px rgba(0,0,0,.1)',
      
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.005)',
        boxShadow: '-1px 1px 10px 1px rgba(0,0,0,.25)',
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
}));