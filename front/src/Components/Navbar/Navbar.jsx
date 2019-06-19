import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { css }  from 'emotion';
import { header, button, searchbar, buttonend, searchInput, searchChildren, searchSubmit, searchSelect } from './style';
import SearchIcon from '@material-ui/icons/Search';
import DropDownUser from './DropDown_user';
import DropDownSnipCart from './DropDown_SnipCart';
import CategoryService from '../../Service/CategoryService.js';
import SearchService from '../../Service/SearchService'

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categorie_list: [],
      categorie_id: null,
      search_value: '',
      input_searc: '',
      result: undefined
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  async componentDidMount(){
    var categories = await CategoryService.getAll();
    this.setState({ categorie_list: categories });
    // console.log(this.state.categorie_list);
  }

  async handleChangeSelect(event){
    this.setState({categorie_id: event.target.value});
  }
  handleCloseModal(){
    this.setState({
      modal: false
    })
  }
  async handleSearch(event){
    if(event.key === 'Enter'){
      if(event.target.value !== ""){
        if(this.state.categorie_id !== 'select a category' && this.state.categorie_id !== null){
          let result = await SearchService.searchByCategory({
            categorie_id: this.state.categorie_id,
            keyword: event.target.value
          })
          if(result.data.length > 0){
            this.setState({
              result: result,
            })
          }
        } else {
          let result = await SearchService.search(event.target.value)
          if(result.data.length > 0){
            this.setState({
              result: result,
            })
          }
        }
      }
    }
  }

  render() {
    return (
      <>
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
      </>
    );
  }
  }