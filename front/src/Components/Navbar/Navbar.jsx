import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import DropDownUser from './components/DropDownUser/DropDownUser';
import DropDownSnipCart from './components/DropDownSnipeCart/DropDownSnipCart';
import CategoryService from '../../Service/CategoryService.js';
import AppendBar from './components/AppendBar/AppendBar';
import { css }  from 'emotion';
import style, {
  SearchBarContainer,
  LogoContainer,
  Logo,
  InputSelect,
  InputText,
  InputOption,
  InputSearch,
  DropdownContainer,
} from './style';

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
  }

  componentDidMount = async () => {
    var categories = await CategoryService.getAll();
    this.setState({ categorie_list: Array.isArray(categories) ? categories : [] });
  }

  handleChangeSelect = async (event) => {
    this.setState({categorie_id: event.target.value});
  }

  handleSearch = async (event) => {
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

        <Toolbar className={css(style.toolbar)}>
        
          <LogoContainer href="/">
            <Logo src="./eco_logo.png" alt="logo"/>
          </LogoContainer>

          <SearchBarContainer>
            <InputSelect>
              <InputOption value="title">Title</InputOption>
              <InputOption value="description">Description</InputOption>
              <InputOption value="categorie">Categorie</InputOption>
            </InputSelect>
            <InputText 
              placeholder="Search..."
              type="text"
              
            />
            <InputSearch className="fas fa-search"/>
          </SearchBarContainer>

          <DropdownContainer>
              <DropDownUser/>
              <DropDownSnipCart/>
          </DropdownContainer>

        </Toolbar>

        <Grid container direction="row" justify='center'>
          <AppendBar />
        </Grid>

      </AppBar>
    );
  }
}
