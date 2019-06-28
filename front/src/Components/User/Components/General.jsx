import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import AuthService from '../../../Service/AuthService.js';

import { css }  from 'emotion';
import {
  dFlexRowCenter,
  dFlexRowSpaceAround,
  generalLeftDiv,
  dFlexColumnCenter,
  dFlexRowSpaceBetween
} from '../style';

export default class General extends React.Component {
  constructor(props){
    super(props);
    console.log(props.user);
    this.error = {
      message_password: null,
      password_curent: false,
      passwordNew: false,
      passwordNew2: false,
    }
    this.state = {
      passwordCurent: '',
      passwordNew: '',
      passwordNew2: '',
    }
  }

  async handleInputChange(event){
    await this.setState({[event.target.name]: event.target.value});
  }

  // async componentDidMount(){
  //      var user = await AuthService.getUserInfo(localStorage.getItem('eToken'));
  //      console.log(user);
  //   await this.setState({
  //     lastname: user.user.lastname,
  //     name: user.user.name,
  //     email: user.user.email,
  //     phone: user.user.phone,
  //     voie: user.user.voie,
  //     ville: user.user.ville,
  //     code_postal: user.user.code_postal,
  //     departement: user.user.departement,
  //     pays: user.user.pays,
  //
  //   })
  //   console.log(this.props.user);
  // }

  updateData = async () => {
    console.log(this.state);
    var user_updated = JSON.stringify(this.state);
    console.log(user_updated);
    var user = await AuthService.updateUser(user_updated);
    console.log(user);
  }

  resetPassword = async () => {
    const { passwordCurent, passwordNew, passwordNew2} = this.state;
    if (!this.checkErrorPassword(passwordCurent, passwordNew, passwordNew2)) {
      return;
    }
    console.log('send');
    // var res = await AuthService.resetPassword({
    //   actual_pass: passwordCurent,
    //   password: passwordNew,
    //   password_confirmation: passwordNew2,
    // });
    // console.log(res);
  }

  checkErrorPassword = (passwordCurent, passwordNew, passwordNew2) => {
    var error = false;
    if (passwordNew2.length <= 4 && passwordNew.length <= 4) {
      this.error.passwordNew = true;
      this.error.passwordNew2 = true;
      this.error.message_password = 'Veuillez remplir tous les champs !';
      error = true;
    } else {
      if (passwordNew !== passwordNew2) {
        this.error.passwordNew = true;
        this.error.passwordNew2 = true;
        this.error.message_password = 'Le mot de passe de confirmation ne correspond pas !';
        error = true;
      } else {
        this.error.passwordNew = false;
        this.error.passwordNew2 = false;
      }
    }
    if (passwordCurent.length <= 4) {
      this.error.password_curent = true;
      this.error.message_password = 'Votre mot de passe courant est invalide !';
      error = true;
    }else {
      this.error.password_curent = false;
    }
    this.forceUpdate();

    if (error) {
      return false;
    }else {
      this.error.message_password = null;
      return true;
    }
  }


  render(){
    const { password_curent, passwordNew, passwordNew2} = this.error;
    return(
      <div>
        <div className={css(dFlexRowSpaceAround)}>
          <div className={css(generalLeftDiv)} style={{width: '150%', paddingLeft: '8%', paddingRight: '10%'}}>
            <h5 className={css(dFlexRowCenter)}>Information personnel</h5>
            <div className={css(dFlexRowSpaceBetween)}>
              <TextField variant="outlined" label="Prenom" margin="normal" name={'lastname'} value={this.state.lastname} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Nom" margin="normal" name={'name'} value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
            </div>
            <Grid container direction='column' justify='space-around'>
              <TextField variant="outlined"  label="Email" margin="normal" name={'email'} value={this.state.email} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Tel" margin="normal" name={'phone'} value={this.state.phone} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Voie" margin="normal" name={'voie'} value={this.state.voie} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Ville" margin="normal" name={'ville'} value={this.state.ville} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Code postal" margin="normal" name={'code_postal'} value={this.state.code_postal} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Departement" margin="normal" name={'departement'} value={this.state.departement} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Pays" margin="normal" name={'pays'} value={this.state.pays} onChange={this.handleInputChange.bind(this)}/>
              <Button onClick={this.updateData}>Save</Button>
            </Grid>
          </div>
          <Grid style={{paddingLeft: '17%', paddingRight: '0%'}} container direction='column' justify='center'>
            <h5 className={css(dFlexRowCenter)}>Modifer son mot de passe</h5>
            <TextField type={'password'} error={password_curent} variant="outlined"  label="Mot de passe actuel" margin="normal" name={'passwordCurent'} value={this.state.passwordCurent} onChange={this.handleInputChange.bind(this)}/>
            <TextField type={'password'} error={passwordNew} variant="outlined"  label="Nouveau mot de passe" margin="normal" name={'passwordNew'} value={this.state.passwordNew} onChange={this.handleInputChange.bind(this)}/>
            <TextField type={'password'} error={passwordNew2} variant="outlined"  label="Retaper le nouveau mot de passe" margin="normal" name={'passwordNew2'} value={this.state.passwordNew2} onChange={this.handleInputChange.bind(this)}/>
            <Grid container direction='row' justify='center'>
              {
                this.error.message_password !== null
                  ? (<p style={{color: 'red'}}>{this.error.message_password}</p>)
                  : (null)
              }
            </Grid>
            <Button onClick={this.resetPassword}>Save</Button>
          </Grid>
        </div>
      </div>
    );
  }
}
