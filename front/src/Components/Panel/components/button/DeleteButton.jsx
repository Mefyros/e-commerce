import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';
import ProductService from '../../../../Service/ProductService';

export default class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteProduct = async () => {
    await ProductService.delete(this.props.productId);
  }

  render() {
    return(
      <Typography className={css(style.buttonBox)}>
          <Button className={css(style.deleteButton)} onClick={this.deleteProduct}>Delete</Button>
      </Typography>
    );
  }
}