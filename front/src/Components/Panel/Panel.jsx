import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import routes from './route';



export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer : true,
      view : ''
    };
  }

  View  = () => {
    return this.state.view
  }

  HandleView (View) {
    this.setState({view : <View/>})
  }

 

  render() {

    return(
        <Container maxWidth="lg">
          <Drawer variant="persistent"
        anchor="left" open={this.state.drawer}>
          <div
            role="presentation"
          >
        <List>
          {routes.map((prop, key) => {
            return (
            <ListItem button key={key} onClick={this.HandleView.bind(this, prop.component)}>
            <ListItemIcon><prop.icon /> </ListItemIcon>
            <ListItemText primary={prop.sidebarName} />
          </ListItem>
            )
          })}
        </List>
      </div>
          </Drawer>
          <CssBaseline />
          <this.View />
        </Container>
    );
  } 
}