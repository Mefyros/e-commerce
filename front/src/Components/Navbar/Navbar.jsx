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


import DropDownUser from './DropDown_user';
import DropDownSnipCart from './DropDown_SnipCart';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
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
    this.setState({ categorie_list: categories });
    // console.log(this.state.categorie_list);
  }

  async handleChangeSelect(event){
    // console.log(event.target.value);
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
              this.state.categorie_list.map((categorie, key) => <option key={key} value={categorie.id}>{categorie.name}</option>)
            }
            </select>
            <input placeholder={'Search...'} className={css(searchInput)}type="text"/>
            <button className={css(searchSubmit)}><SearchIcon/></button>
          </div>
        </div>

        <div className={css(buttonend)}>
          <Grid style={{marginTop: 10}} container direction="row" justify='space-around'>
            <DropDownUser/>
            <DropDownSnipCart/>
          </Grid>
        </div>

        </Toolbar>
      </AppBar>
    );
  }
  }