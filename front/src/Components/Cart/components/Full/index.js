import React from 'react';
import BasketMenu from './components/CartContent';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BasketTotal from './components/CartTotal';
import Button from '../../../DefaultComponent/Button';
import {css} from 'emotion';
import * as S from "./style";

export default class FullCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisable: false,
      showModal: false,
    };
  }

  changeInputStatus = () => {
    this.setState({ inputDisable: true });
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  modal = () => {
    return (
      <S.ModalContainer>
        <S.Modal>

          <S.ModalHeader>
            <S.ModalHeaderTitle>Login</S.ModalHeaderTitle>
            <S.ModalClose className="far fa-times-circle" onClick={this.closeModal}/>
          </S.ModalHeader>

          <S.ModalContent>
            <S.ModalContentTitle>Would you sign in before continue ?</S.ModalContentTitle>
            <S.ModalButtons>
              <Button 
                buttonStyle={css(S.ButtonStyleYes)}
                text="Yes"
                // onClick={}
                // icon={<i className="fas fa-cart-plus"></i>}
                // left
              />
              <Button 
                buttonStyle={css(S.ButtonStyleNo)}
                text="No"
                onClick={this.closeModal}
                // icon={<i className="fas fa-cart-plus"></i>}
                // left
              />
            </S.ModalButtons>
          </S.ModalContent>

        </S.Modal>
      </S.ModalContainer>
    )
  }

  render() {
    const {inputDisable, showModal} = this.state;

    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>

          <S.Title>My Cart</S.Title>
          
          <Grid item xs={12} md={8}>
            <BasketMenu inputDisable={inputDisable}/>
          </Grid>

          <Grid item xs={12} md={1} />

          <Grid item xs={12} md={3}>
            <BasketTotal changeInputStatus={this.changeInputStatus} openModal={this.openModal}/>
          </Grid>

          {showModal && this.modal()}

        </Grid>
      </Container>
    );
  }
}
