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
    this.state = {}
  }

  async handleInputChange(event){
    await this.setState({[event.target.name]: event.target.value});
  }

  async componentDidMount(){
       var user = await AuthService.getUser(localStorage.getItem('eToken'));
       console.log(user);
    await this.setState({
      nom: user.user.name,
      email: user.user.email,
    })
  }

  render(){
    return(
      <div>
        <div style={{marginTop: '10%'}} className={css(dFlexRowSpaceAround)}>
          <div className={css(generalLeftDiv)} style={{width: '150%', paddingLeft: '8%', paddingRight: '10%'}}>
            <h5 className={css(dFlexRowCenter)}>Information personnel</h5>
            <div className={css(dFlexRowSpaceBetween)}>
              <TextField variant="outlined" label="Prenom" margin="normal" name={'Prenom'} value={this.state.prenom} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Nom" margin="normal" name={'Nom'} value={this.state.nom} onChange={this.handleInputChange.bind(this)}/>
            </div>
            <Grid container direction='column' justify='space-around'>
              <TextField variant="outlined" fullwidth  label="Email" margin="normal" name={'email'} value={this.state.email} onChange={this.handleInputChange.bind(this)}/>
              <TextField variant="outlined"  label="Tel" margin="normal" name={'tel'} value={this.state.tel} onChange={this.handleInputChange.bind(this)}/>
              <Button>Save</Button>
            </Grid>
          </div>
          <Grid style={{paddingLeft: '17%', paddingRight: '0%'}} container direction='column' justify='space-around'>
            <h5 className={css(dFlexRowCenter)}>Modifer son mot de passe</h5>
            <TextField variant="outlined"  label="Mot de passe actuel" margin="normal" name={'passwordCurent'} value={this.state.passwordCurent} onChange={this.handleInputChange.bind(this)}/>
            <TextField variant="outlined"  label="Nouveau mot de passe" margin="normal" name={'passwordNew'} value={this.state.passwordNew} onChange={this.handleInputChange.bind(this)}/>
            <TextField variant="outlined"  label="Retaper le nouveau mot de passe" margin="normal" name={'passwordNew2'} value={this.state.passwordNew2} onChange={this.handleInputChange.bind(this)}/>
            <Button>Save</Button>
          </Grid>
        </div>
      </div>
    );
  }
}
