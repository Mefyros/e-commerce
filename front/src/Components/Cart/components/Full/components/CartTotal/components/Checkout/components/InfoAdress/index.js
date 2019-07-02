import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default class Info_adress extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

async handleInputChange(event) {
        await this.setState({[event.target.name]: event.target.value});
        localStorage.setItem('eUser_adress', JSON.stringify(this.state));
}

async componentDidMount(){
  await this.setState(JSON.parse(this.props.local));
  console.log(this.state);
}

  render(){
    return(
      <Container>
          <TextField style={padding_field} error={false} helperText='Required' fullWidth label="Pay" value={this.state.pays} name='pays' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Departement" value={this.state.departement} name='departement' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Ville" value={this.state.ville} name='ville' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Code postal" value={this.state.cpostal} name='cpostal' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Rue" name='rue' value={this.state.rue} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Numero" name='number' value={this.state.number} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} multiline={true} rows={5} fullWidth helperText='Required' label="Infomation suplementaire" name='info_sup' value={this.state.info_sup} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
      </Container>

    );
  }
}

const padding_field = {
  margin: 5,
  marginTop: 20
}
