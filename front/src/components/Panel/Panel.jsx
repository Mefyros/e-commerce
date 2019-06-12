import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from './style';
import Button from './components/button/button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

export default (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    searchProduct: '',
  });

  const handleChangeSearchBar = props=> event => {
    setState({ ...state, [props]: event.target.value }, () => {
      console.log(state)
    });
  }

  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Button name="Add new product" action="/product/create"/>

        <FormControl>
        <InputLabel htmlFor="adornment-password">Search product</InputLabel>
        <Input
          id="adornment-password"
          type="text"
          // value={state.searchProduct}
          onChange={handleChangeSearchBar('searchProduct')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
        {/* <Button name="Edit" action="/product/1/edit"/> */}
        {/* <Button name="Delete"/> */}
      </Container>
    </React.Fragment>
  );
}