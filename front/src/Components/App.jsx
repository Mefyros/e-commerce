import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import Product from './Product/Product';
import Panel from './Panel/Panel';
import ProductForm from './Form/ProductForm/ProductForm';
import Navbar from './Navbar/Navbar';
import Menuccsc from './Menuccsc/Menu';
import Cart from './Panier/Panier';
import { css } from 'emotion';
import { space } from './style';
import './index.css';
import Panier from "./Panier/Panier";

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
  
          <div className={css(space)}/>
  
          <Route
            exact path="/"
            component={Home}
          />
  
          {/* To get params in this components => this.props.match.params.id */}
          <Route
            exact path="/product/:id"
            component={Product}
          />
          <Route
            exact path="/panel"
            component={Panel}
          />
          <Route
            exact path="/new/product"
            component={ProductForm}
          />
          
          {/* To get params in this components => this.props.match.params.id */}
          <Route
            exact path="/product/:id/edit"
            component={ProductForm}
          />

          <Route
            exact path="/c/:classes"
            component={Menuccsc}
          />

          <Route
            exact path="/c/:classes/:categorie"
            component={Menuccsc}
          />

          <Route
            exact path="/c/:classes/:categorie/:subcategorie"
            component={Menuccsc}
          />

          <Route
              exact path="/cart"
              component={Cart}
          />

          <Route
              exact path="/search"
              component={Home}
          />

          <Route
              exact path="/panel_gestion"
              component={Home}
          />
        </div>
      </Router>
    );
  }
}