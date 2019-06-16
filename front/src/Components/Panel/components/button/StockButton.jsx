import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style, { ModalTitle } from './style';

export default class StockButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      quantity: this.props.quantity,
      open: this.props.id === 6 ? true : false,
    }
  }

  handleUpdateStockClick = () => {
    const { id, quantity } = this.state;
    console.log({ id, quantity });
    this.setState({
      open: true,
    });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { id, quantity, open} = this.state;

    return(
      <>
        <Typography className={css(style.buttonBox)} onClick={this.handleUpdateStockClick}>
            <Button className={css(style.stockButton)}>Update stock</Button>
        </Typography>

        <Modal
          aria-labelledby={`update-quantity-product-${id}`}
          aria-describedby={`description-product-${id}`}
          open={open}
          onClose={this.handleClose}
          disableEscapeKeyDown={true}
          disableBackdropClick={true}
        >
          <div className={css(style.modalStyle)}>
            <ModalTitle>Update product quantity</ModalTitle>
            <Typography className={css(style.buttonBox)} onClick={this.handleClose}>
              <Button className={css(style.saveButton)}>Save</Button>
            </Typography>
          </div>
        </Modal>
      </>
    );
  }
}