import React from 'react';
import DeleteButton from '../button/DeleteButton';
import EditButton from '../button/EditButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { css } from 'emotion';
import style from './style';

export default class Crad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick = () => {
    const { productId } = this.props;
    const link = document.getElementById(`product${productId}`);
    link.click();
  }

  render() {
    const { name, productId } = this.props;

    return(
      <div className={css(style.container)}>
        <p className={css(style.title)} onClick={this.handleClick}>{name}</p>
        <div className={css(style.buttonContainer)}>
          <DeleteButton productId={productId}/>
          <EditButton productId={productId}/>
          <Link id={`product${productId}`} to={`/product/${productId}`}/>
        </div>
      </div>
    );
  }
}