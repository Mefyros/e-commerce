import React from 'react';
import ClassService from '../../Service/ClassService';
import CategoryService from '../../Service/CategoryService';
import SubCategoryService from '../../Service/SubCatService';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from './Card/Card';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';
import style, { Title } from './style';
import { css } from 'emotion';

export default class Menuccsc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cardData: [],
      route: this.props.match.url,
      links: [],
    }
  }

  createBreadcrumLinks = name => {
    const { classes, categorie, subcategorie } = this.props.match.params;
    let links = [];
    console.log(name)
    if (classes !== undefined) {
      links.push({
        id: classes,
        name: name.classes,
        url: `/c/${classes}`
      });
    }

    if (categorie !== undefined) {
      links.push({
        id: categorie,
        name: name.categorie,
        url: `/c/${classes}/${categorie}`
      });
    }

    if (subcategorie !== undefined) {
      links.push({
        id: subcategorie,
        name: name.subcategorie,
        url: `/c/${classes}/${categorie}/${subcategorie}`
      });
    }

    return links;
  }

  componentDidMount = async () => {
    const { classes, categorie, subcategorie } = this.props.match.params;

    if (Number.isInteger(parseInt(subcategorie))) {
      const subCat = await SubCategoryService.getById(subcategorie);
      if (subCat.children === undefined) {
        subCat.children = [];
      }
      this.setStartStateData(subCat.name, subCat.children, this.createBreadcrumLinks({
        classes: subCat.parent.parent.name,
        categorie: subCat.parent.name,
        subcategorie: subCat.name,
      }));
    } 
    else if (Number.isInteger(parseInt(categorie))) {
      const cat = await CategoryService.getById(categorie);
      if (cat.children === undefined) {
        cat.children = [];
      }
      this.setStartStateData(cat.name, cat.children, this.createBreadcrumLinks({
        classes: cat.parent.name,
        categorie: cat.name,
      }));
    } 
    else if (Number.isInteger(parseInt(classes))) {
      const cla = await ClassService.getById(classes);
      if (cla.children === undefined) {
        cla.children = [];
      }
      this.setStartStateData(cla.name, cla.children, this.createBreadcrumLinks({
        classes: cla.name,
      }));
    }
  }

  setStartStateData = (title, cardData, links) => {
    this.setState({ title, cardData, links });
  }

  render() {
    const { title, cardData, route, links } = this.state;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <Breadcrumb links={links}/>
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
