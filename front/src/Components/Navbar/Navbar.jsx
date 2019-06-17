import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css }  from 'emotion';
import { header, button, searchbar, buttonend, searchInput, searchChildren, searchSubmit, searchSelect } from './style';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import UserIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

import CategoryService from '../../Service/CategoryService.js';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categorie_list: [],
      id_categorie: null,
      search_value: '',
      input_searc: '',
    }
  }
  async componentDidMount(){
    var categories = await CategoryService.getAll();
    this.setState({categorie_list: categories.data});
    console.log(this.state.categorie_list);
  }

  async handleChangeSelect(event){
    console.log(event.target.value);
    this.setState({id_categorie: event.target.value});
  }

  render() {
    return (
      <AppBar className={css(header)} position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <Button className={css(button)} component={Link} color="inherit" to="/">Home</Button>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Button className={css(button)} component={Link} color="inherit" to="/panel">Panel</Button>
          </Typography>
        <div className={css(searchbar)}>
          <div className={css(searchChildren)}>
            <select onChange={this.handleChangeSelect.bind(this)} value={this.state.id_categorie} className={css(searchSelect)}>
            {
              this.state.categorie_list.map((categorie) => <option value={categorie.id}>{categorie.name}</option>)
            }
            </select>
            <input placeholder={'Search...'} className={css(searchInput)}type="text"/>
            <button className={css(searchSubmit)}><SearchIcon/></button>
          </div>
        </div>
            <div className={css(buttonend)}>
            <Button component={Link} color="inherit" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
            <FormHelperText>Cart</FormHelperText>
            </Button>

            <Button component={Link} color="inherit" to="/">
            <UserIcon />
            <FormHelperText>User</FormHelperText>
            </Button>
            </div>

        </Toolbar>
      </AppBar>
    );
  }
  }