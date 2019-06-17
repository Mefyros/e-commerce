import React from 'react';
import ClassService from '../../Service/ClassService';
import CategoryService from '../../Service/CategoryService';
import SubCategoryService from '../../Service/SubCatService';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from './Card/Card';
import style, { Title } from './style';
import { css } from 'emotion';

// /c/9/13/(20,21)

export default class Menuccsc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cardData: [],
      route: this.props.match.url,
    }
  }

  componentDidMount = async () => {
    const { classes, categorie, subcategorie } = this.props.match.params;

    if (Number.isInteger(parseInt(subcategorie))) {
      const subCat = await SubCategoryService.getById(subcategorie);
      if (subCat.data.children === undefined) {
        subCat.data.children = [];
      }
      this.setStartStateData(subCat.data.name, subCat.data.children);
    } 
    else if (Number.isInteger(parseInt(categorie))) {
      const cat = await CategoryService.getById(categorie);
      if (cat.data.children === undefined) {
        cat.data.children = [];
      }
      this.setStartStateData(cat.data.name, cat.data.children);
    } 
    else if (Number.isInteger(parseInt(classes))) {
      const cla = await ClassService.getById(classes);
      if (cla.data.children === undefined) {
        cla.data.children = [];
      }
      this.setStartStateData(cla.data.name, cla.data.children);
    }
  }

  setStartStateData = (title, cardData) => {
    this.setState({ title, cardData });
  }

  render() {
    const { title, cardData, route } = this.state;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>

            <Container maxWidth="lg" className={css(style.titleContainer)}>
              <Title>{title}</Title>
            </Container>

            <Container maxWidth="lg" className={css(style.cardContainer)}>
              {
                cardData.map((data, key) => <Card key={key} data={data} route={route}/>)
              }
            </Container>

            </Grid>
        </Grid>
      </Container>
    )
  }
}
