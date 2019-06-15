import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';
import ClassService from '../../../../Service/ClassService';
import CategorieService from '../../../../Service/CategoryService';
import SubCategorieService from '../../../../Service/SubCatService';

export default class CategorieManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classSelectValue: "",
      categorieSelectValue: "",
      subCategorieSelectValue: "",
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
      classes: [],
      categories: [],
      subCategories: [],
    }
  }

  componentDidMount = () => {
    this.getClass();
  }

  getClass = async () => {
    const classes = await ClassService.getAll();
    this.setState({
      classes: classes.data,
    });
  }

  handleClassInputChange = e => {
    const { classes } = this.state;

    this.setState({ 
      classSelectValue: e.target.value,
      categorieSelectValue: "",
      subCategorieSelectValue: "",
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
    });

    if (Number.isInteger(e.target.value)) {
      const categories = classes.find(function(c){
        return c.id === e.target.value;
      });
      this.setState({ 
        categories: categories.categories,
      });
    }
  }

  handleCategorieInputChange = async e => {
    const { categories } = this.state;

    this.setState({ 
      categorieSelectValue: e.target.value,
      subCategorieSelectValue: "",
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
    });

    if (Number.isInteger(e.target.value)) {
      const categorie = await CategorieService.getById(e.target.value);
      this.setState({
        subCategories: categorie.data,
      });
    }
  }

  handleSubCategorieInputChange = e => {
    this.setState({ 
      subCategorieSelectValue: e.target.value,
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
    });
  }

  handleChangeClassTextInput = e => {
    this.setState({ 
      newClassName: e.target.value,
      newCategorieName: "",
      newSubCategorieName: "",
    });
  }

  handleChangeCategorieTextInput = e => {
    this.setState({ 
      newClassName: "",
      newCategorieName: e.target.value,
      newSubCategorieName: "",
    });
  }

  handleChangeSubCategorieTextInput = e => {
    this.setState({ 
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: e.target.value,
    });
  }

  handleAddNewCscc = async e => {
    const { 
      newClassName, newCategorieName, newSubCategorieName, classSelectValue, 
      categorieSelectValue,
    } = this.state;
    
    if (newClassName !== "") {
      await ClassService.create({ name: newClassName });
    }
    else if (newCategorieName !== "") {
      await CategorieService.create({
        name: newCategorieName,
        "classe_id": classSelectValue,
      });
    }
    else if (newSubCategorieName !== "") {
      await SubCategorieService.create({
        name: newSubCategorieName,
        "categorie_id": categorieSelectValue,
      });
    }
    this.resetFields();
    this.getClass();
  }

  resetFields = () => {
    this.setState({ 
      classSelectValue: "",
      categorieSelectValue: "",
      subCategorieSelectValue: "",
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
    });
  }

  render() {
    const { 
      classSelectValue, categorieSelectValue, subCategorieSelectValue,
      newClassName, newCategorieName, newSubCategorieName, classes, categories,
      subCategories,
    } = this.state;

    const newClass = classSelectValue === "new-class" ? true : false;
    const newCategorie = categorieSelectValue === "new-categorie" ? true : false;
    const newSubCategorie = subCategorieSelectValue === "new-sub-categorie" ? true : false;

    const createNewCcsc = newClass || newCategorie || newSubCategorie ? true : false;

    const showCategorieSelect = classSelectValue === "new-class" || classSelectValue === "" ? false : true;
    const showSubCategorieSelect = categorieSelectValue === "new-class" || categorieSelectValue === "" ? false : true;

    return(
      <div className={css(style.container)}>
        <h4 className={css(style.title)}>Manage Class</h4>
        <div className={css(style.inputContainer)}>
          <FormControl className={css(style.formControl)}>
            <InputLabel shrink htmlFor="class-name">Class</InputLabel>
            <Select
              value={classSelectValue}
              onChange={this.handleClassInputChange}
              displayEmpty
              name="class-name"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="new-class">New class</MenuItem>
              {
                classes.map((c, k) => <MenuItem key={k} value={c.id}>{c.name}</MenuItem>)
              }
            </Select>
          </FormControl>
            {
              newClass ? (
                <TextField
                  id="new-class"
                  label="Class Name"
                  value={newClassName}
                  onChange={this.handleChangeClassTextInput}
                  margin="normal"
                />
              ) : showCategorieSelect ? (
                <FormControl className={css(style.formControl)}>
                  <InputLabel shrink htmlFor="categorie-name">Categorie</InputLabel>
                  <Select
                    value={categorieSelectValue}
                    onChange={this.handleCategorieInputChange}
                    displayEmpty
                    name="categorie-name"
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="new-categorie">New categorie</MenuItem>
                    {
                      categories.map((c, k) => <MenuItem key={k} value={c.id}>{c.name}</MenuItem>)
                    }
                  </Select>
                </FormControl>
              ) : (
                null
              )
          }
            
          {
            newCategorie ? (
              <TextField
                id="new-class"
                label="Categorie Name"
                value={newCategorieName}
                onChange={this.handleChangeCategorieTextInput}
                margin="normal"
              />
            ) : showSubCategorieSelect ? (
              <FormControl className={css(style.formControl)}>
                <InputLabel shrink htmlFor="sub-categorie-name">Sub-Categorie</InputLabel>
                <Select
                  value={subCategorieSelectValue}
                  onChange={this.handleSubCategorieInputChange}
                  displayEmpty
                  name="sub-categorie-name"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="new-sub-categorie">New sub-categorie</MenuItem>
                  {
                    subCategories.map((c, k) => <MenuItem key={k} value={c.id}>{c.name}</MenuItem>)
                  }
                </Select>
              </FormControl>
            ) : (
              null
            )
          }
          {
            newSubCategorie ? (
              <TextField
                id="new-class"
                label="Sub categorie Name"
                value={newSubCategorieName}
                onChange={this.handleChangeSubCategorieTextInput}
                margin="normal"
              />
            ) : (
              null
            )
          }
          {
            createNewCcsc ? (
              <Typography className={css(style.buttonBox)}>
                <Button className={css(style.button)} onClick={this.handleAddNewCscc}>Create new</Button>
              </Typography>
            ) : (
              null
            )
          }
          
          
        </div>
      </div>
    );
  }
}