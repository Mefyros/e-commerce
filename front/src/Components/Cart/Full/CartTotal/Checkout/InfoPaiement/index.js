import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import PaypalButton from './PaypalButton';

export default class InfoPaiement extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  handleInputChange(event){
    if (event.target.name === 'expireDate') {
      if (event.target.value.length <= 5) {
        if (event.target.value.length === 2 && event.target.value.length > this.state.expireDate.length) {
            this.setState({[event.target.name]: event.target.value + '/'});
        } else {
            this.setState({[event.target.name]: event.target.value});
        }
      }
    } else {
      if (event.target.name === 'ccv') {
        if (event.target.value.length <= 3) {
          this.setState({[event.target.name]: event.target.value});
        }
      } else {
        if (event.target.name === 'cartNumber') {
            if (event.target.value.length <= 16) {
              console.log(parseInt(event.target.value[event.target.value.length - 1]));
              if (parseInt(event.target.value[event.target.value.length - 1]) &&  !isNaN(parseInt(event.target.value[0]))) {
                this.setState({[event.target.name]: event.target.value});
              }
            }
        } else {
          this.setState({[event.target.name]: event.target.value});
        }
      }
    }
  }

  render(){
    return(
      <Container>
          <PaypalButton/>
          <TextField style={padding_field} error={false} helperText='Required' fullWidth label="Nom du titulaire" value={this.state.titulaireName} name='titulaireName' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Numero de carte" value={this.state.cartNumber} name='cartNumber' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Date d'expiration" value={this.state.expireDate} name='expireDate' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="CCV" value={this.state.ccv} name='ccv' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
      </Container>
    );
  }
}

const padding_field = {
  margin: 5,
  marginTop: 20
}
