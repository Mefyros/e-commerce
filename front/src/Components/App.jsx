import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import Product from './Product/Product';
import Panel from './Panel/Panel';
import ProductForm from './Form/ProductForm/ProductForm';
import Header from './Navbar/Navbar';
import { css } from 'emotion';
import { space } from './style';
import './index.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
  
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
        </div>
      </Router>
    );
  }
}