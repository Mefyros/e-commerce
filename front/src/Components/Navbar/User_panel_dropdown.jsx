import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import AuthService from '../../Service/AuthService.js';
import LoginRegisterService from '../../Service/LoginRegisterService.js';

export default class User_panel_dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      register: false,
      token: null,
      user: this.props.user
    };
  }

  async handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      if (target.type == 'file') {
          await this.setState({[name]: event.target.files});
      }else {
          await this.setState({[name]: value});
      }
  }

  async submit(context){
    if (context === 'login') {
      var res = await LoginRegisterService.login({
        email: this.state.email,
        password: this.state.password,
      });
        await localStorage.setItem('eToken', res.data.success.token);
        var user = await AuthService.getUser(res.data.success.token);
        console.log(user);
        console.log(res.data.success.toke);
        await this.setState({token: res.data.success.token, user: user.user});
    }
    if (context === 'register') {
      var res = await LoginRegisterService.register({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        c_password: this.state.password_verif
      });
      await localStorage.setItem('eToken', res.data.success.token);
      var user = await AuthService.getUser(res.data.success.token);
      await this.setState({user: user.user, token: res.data.success.token });
    }
}

async logout(){
  await this.setState({user: null, token: null});
  localStorage.removeItem('eToken');
}

  login(){
    return (
      <div style={{padding: 30}}>
        <Container>
          <Grid container direction='row' justify='center'>
            <h5>Sign in</h5>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField helperText='Required' fullWidth label="Login" name='email' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField type='password' helperText='Required' fullWidth label="Password" name='password' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.submit('login')}>Login</Button>
          </Grid>
          <Grid container direction='row' justify='center'>
            <h6>Ou</h6>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.setState({register: true})}>Register</Button>
          </Grid>
        </Container>
      </div>
    )
  }

  register(){
    return (
      <div style={{padding: 50}}>
        <Container>
          <Grid container direction='row' justify='center'>
            <h5>Register</h5>
            <Icon>
              add_circle
            </Icon>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField helperText='Required' fullWidth label="name" name='name' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField helperText='Required' fullWidth label="Login" name='email' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField type='password' helperText='Required' fullWidth label="Password" name='password' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField type='password' helperText='Required' fullWidth label="Password" name='password_verif' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.submit('register')}>Let's go !</Button>
          </Grid>
          <Grid container direction='row' justify='center'>
            <h6>Ou</h6>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.setState({register: false})}>Sign in !</Button>
          </Grid>
        </Container>
      </div>
    )
  }

  panelUser(){
    console.log(this.state);
    return(
      <div>
      <Container>
        <Grid container direction='row' justify='center'>
        <Avatar style={{width: 60, height: 60}}>img</Avatar>
        </Grid>
      </Container>
      <Container style={{marginTop: 10}}>
      <Grid container direction='row' justify='center'>
        <h5>{this.state.user.name}</h5>
        </Grid>
        <Grid container direction='row' justify='center'>
        <p>{this.state.user.email}</p>
      </Grid>
      </Container>
      <Divider/>
      <Container>
        <List>
          <ListItem button>
            <ListItemText><h6>Mon compte</h6></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText><h6>Voir mon panier</h6></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText onClick={() => this.logout()}><h6>Logout</h6></ListItemText>
          </ListItem>
        </List>
      </Container>
      </div>
    );
  }

  display(){
    if (this.state.token !== null && this.state.user !== null && typeof this.state.user !== 'undefined') {
      return this.panelUser();
    }else {
      if (this.state.register === true) {
        return this.register();
      }else {
        return this.login();
      }
    }
  }

   async componentDidMount(){
     var user = await AuthService.getUser(localStorage.getItem('eToken'));
     await this.setState({token: localStorage.getItem('eToken'), user: user.user});
     await this.setState({token: localStorage.getItem('eToken')});
    }

  render(){
    return(
      <div>
        {this.display()}
      </div>
    );
  }
}
