import React from 'react';

import { css }  from 'emotion';
import { Space, footer } from './style';

import './index.css';
import Routes from './Routes/Routes';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Space />
        <Routes />
          <div className={css(footer)}>
              <Footer/>
          </div>
      </div>
    );
  }
}