import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { css }  from 'emotion';
import style from './style';
import SearchIcon from '@material-ui/icons/Search';
import DropDownUser from './components/DropDownUser/DropDownUser';
import DropDownSnipCart from './components/DropDownSnipeCart/DropDownSnipCart';
import CategoryService from '../../Service/CategoryService.js';
import AppendBar from './components/AppendBar/AppendBar';

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
    this.setState({ categorie_list: Array.isArray(categories) ? categories : [] });
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
        console.log(event.target.value)
        if(this.state.categorie_id !== 'select a category' && this.state.categorie_id !== null){
          window.location.href = '/search/categorie/'+this.state.categorie_id+'/'+event.target.value;
          // let result = await SearchService.searchByCategory({
          //   categorie_id: this.state.categorie_id,
          //   keyword: event.target.value
          // })
          // if(result.data.length > 0){
          //   this.setState({
          //     result: result,
          //   })
          // }
        } else {
          window.location.href = '/search/'+event.target.value;
          // let result = await SearchService.search(event.target.value)
          // if(result.data.length > 0){
          //   this.setState({
          //     result: result,
          //   })
          // }
        }
      }
    }
  }
  render() {
    return (
      <AppBar className={css(style.header)} position="static" color="default">
        <Toolbar>
{/* 
        <div className={css(style.searchbar)}>
          <div className={css(style.searchChildren)}>
            <select onChange={this.handleChangeSelect.bind(this)} value={this.state.id_categorie} className={css(style.searchSelect)}>
              <option>Select a category</option>
            {
              this.state.categorie_list.map((categorie, key) => <option key={key} value={categorie.id}>{categorie.name}</option>)
            }
            </select>
            <input onKeyUp={this.handleSearch} placeholder={'Search...'} className={css(style.searchInput)}type="text"/>
            <button className={css(style.searchSubmit)}><SearchIcon/></button>
          </div>
        </div> */}

        <div>
          <Grid container direction="row" justify='space-around'>
            <DropDownUser/>
            <DropDownSnipCart/>
          </Grid>
        </div>

        </Toolbar>
        <Grid container direction="row" justify='center'>
          <AppendBar />
        </Grid>
      </AppBar>
    );
  }
}
