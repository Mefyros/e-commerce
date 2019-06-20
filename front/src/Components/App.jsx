import React from 'react';

import { css } from 'emotion';
import style, { Space } from './style';

import './index.css';
import Routes from './Routes/Routes';
import Navbar from './Navbar/Navbar';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Space />
        <Routes />
      </div>
    );
  }
}