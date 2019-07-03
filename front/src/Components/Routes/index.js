import React from 'react';
import { Switch ,Route } from "react-router-dom";
import { connect } from 'react-redux';

import Home from '../Home';
import Product from '../Product';
import Panel from '../Panel';
import ProductForm from '../Form/ProductForm';
import Menuccsc from '../Menuccsc';
import Cart from '../Cart';
import SearchResult from '../SearchResult'
import Account from '../User/Account'


const mapStateToProps = state => {
  return {
    user: state.user,
  };
}

class Routes extends React.Component {
  render() {
    const { isLogin, isAdmin, data } = this.props.user;

    return (
      <Switch>
    
          {/* Allowed routes for all user  */}
          <Route exact path="/" component={Home} />
    
          {/* To get params in this components => this.props.match.params.id */}
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/product/:id/edit" component={ProductForm} />
          <Route exact path="/new/product" component={ProductForm} />
    
          <Route exact path="/panel" component={Panel} />
          <Route exact path="/panel_gestion" component={Home} />

          <Route exact path="/c/:classes" component={Menuccsc} />
          <Route exact path="/c/:classes/:categorie" component={Menuccsc} />
          <Route exact path="/c/:classes/:categorie/:subcategorie" component={Menuccsc} />
    
          <Route exact path="/cart" component={Cart} />
    
          <Route exact path="/search" component={Home} />
          <Route exact path="/search/:keyword" component={SearchResult} />
          <Route exact path="/search/categorie/:categorie/:keyword" component={SearchResult} />

          <Route exact path="/my_account" component={Account} />
    
          {/* Allowed routes for log user */}
          {
            isLogin ? (
              <>
                
              </>
            ) : (
              null
            )
          }

          {/* Allowed routes for admin */}
          {
            isAdmin ? (
              <>
                
              </>
            ) : (
              null
            )
          }
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Routes);