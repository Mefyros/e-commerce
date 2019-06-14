import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { css } from 'emotion';
import { root, paper, paperpay, zozio, paperprice, paperdesc, button } from './style';

export default class Product extends React.Component {
  
  render() {
    return(
      <Container maxWidth="lg">
        <div className={css(root)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper className={css(paper)}>
                <img className={css(zozio)} src="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg" alt="oisal"/>
                </Paper>
              <Paper className={css(paperpay)}>42,42€ ─ 
                <Button variant="contained" color="primary" className={css(button)}>
                  <ShoppingCartIcon id="add-to-cart"/>
                </Button>
              </Paper>
              <Paper className={css(paperprice)}>
                <h3 style={{ color: 'red' }}>Stock: Not available</h3>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={css(paper)}>Petit Oisal Gris - Gold Édition</Paper>
  
              <Paper className={css(paperdesc)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper 
                odio vitae diam commodo facilisis. Pellentesque euismod, leo sed luctus hendrerit, mauris nisl pharetra dolor, 
                eget lobortis risus lectus vitae sem. Integer iaculis ipsum id aliquam tincidunt. Quisque id dapibus velit. 
                Phasellus et felis mattis, sollicitudin diam non, dignissim tellus. Nam ut nisl auctor, pretium tellus vel, 
                euismod ligula. Pellentesque id maximus leo. Nunc eget odio consectetur, sollicitudin metus quis, condimentum 
                magna. Curabitur sed congue sem. Cras a dolor vitae ante pretium pharetra. Donec tincidunt placerat magna, 
                eget laoreet velit porta vel. Sed sollicitudin porttitor consectetur. Donec velit elit, sagittis ac tristique 
                in, ornare in dui. Vivamus auctor pulvinar lobortis. Vivamus ullamcorper enim volutpat dolor malesuada posuere 
                nec eu metus. Curabitur sit amet risus feugiat, ultricies lorem nec, lacinia leo. Fusce condimentum egestas dictum. 
                Donec quis leo mollis, congue ante vel, mattis purus. Cras commodo lectus libero, non lobortis metus dapibus vel. 
                Duis imperdiet elit at tortor efficitur efficitur. Cras eu mauris volutpat, efficitur lacus ac, finibus neque. 
                Integer ligula risus, pretium ultricies ullamcorper eget, pellentesque at ipsum. Duis ultrices justo a mi blandit, 
                nec convallis odio dapibus. Cras interdum ultricies velit, sit amet luctus nisi porttitor sit amet. Nam sed 
                iaculis neque. Pellentesque turpis nulla, pulvinar at scelerisque a, gravida vel est. Morbi imperdiet et sem 
                non rhoncus. Aenean lectus lacus, accumsan id pellentesque non, feugiat a leo. Duis iaculis urna turpis, 
                id ornare lectus interdum in. Integer finibus facilisis neque, imperdiet luctus mauris ultricies quis. 
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}