import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { css } from 'emotion';
import style, { ModalTitle, InputContainer } from './style';
import ProductService from '../../../../Service/ProductService';

export default class StockButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      quantity: this.props.quantity,
      open: false,
      inStock: this.props.quantity > 0 ? 'in' : 'out',
    }
  }

  handleUpdateStockClick = () => {
    const { id, quantity } = this.state;
    this.setState({
      open: true,
    });
  }

  handleSave = async () => {
    const { quantity, id, inStock } = this.state;

    if (inStock === 'in' && quantity === '') {
      this.setState({ quantity: 0 });
      // await ProductService.updateStock(id, 0);
    } else {
      // await ProductService.updateStock(id, quantity);
    }

    this.setState({ open: false });
  }

  handleStockChange = e => {
    if (e.target.value === 'in') {
      this.setState({ inStock: 'in' });
    } else if (e.target.value === 'out') {
      this.setState({ inStock: 'out', quantity: 0 });
    }
  }

  handleQuantityChange = e => {
    if (parseInt(e.target.value) > -1)
      this.setState({ quantity: parseInt(e.target.value) });
    else if (isNaN(parseInt(e.target.value)))
      this.setState({ quantity: '' });
  }

  render() {
    const { id, quantity, open, inStock} = this.state;

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

            <InputContainer>
              <FormControl className={css(style.formControl)}>
                <InputLabel shrink htmlFor="manage-stock">Manage Stock</InputLabel>
                <Select
                  value={inStock}
                  onChange={this.handleStockChange}
                  name="manage-stock"
                >
                  <MenuItem value="in">Available</MenuItem>
                  <MenuItem value="out">Not Available</MenuItem>
                </Select>
              </FormControl>
              {
                inStock === 'in' ? (
                  <TextField
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={this.handleQuantityChange}
                  />
                ) : (
                  null
                )
              }
            </InputContainer>

            <Typography className={css(style.buttonBox)}>
              <Button className={css(style.saveButton)} onClick={this.handleSave}>Save</Button>
            </Typography>
          </div>
        </Modal>
      </>
    );
  }
}