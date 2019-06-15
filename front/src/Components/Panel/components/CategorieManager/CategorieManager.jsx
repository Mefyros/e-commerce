import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { css } from 'emotion';
import style from './style';

const CLASS = [
  {
    id: 1,
    name: "test"
  }
]

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
    }
  }

  handleClassInputChange = e => {
    this.setState({ 
      classSelectValue: e.target.value,
      categorieSelectValue: "",
      subCategorieSelectValue: "",
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
     });
  }

  handleCategorieInputChange = e => {
    this.setState({ 
      categorieSelectValue: e.target.value,
      subCategorieSelectValue: "",
      newClassName: "",
      newCategorieName: "",
      newSubCategorieName: "",
    });
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


  render() {
    const { 
      classSelectValue, categorieSelectValue, subCategorieSelectValue,
      newClassName, newCategorieName, newSubCategorieName
    } = this.state;

    const newClass = classSelectValue === "new-class" ? true : false;
    const newCategorie = categorieSelectValue === "new-categorie" ? true : false;
    const newSubCategorie = subCategorieSelectValue === "new-sub-categorie" ? true : false;

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
                CLASS.map((c, k) => <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>)
              }
            </Select>
          </FormControl>
            {
              newClass ? (
                <TextField
                  id="new-class"
                  label="Class Name"
                  value={newClassName}
                  className={style.textField}
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
                      CLASS.map((c, k) => <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>)
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
                className={style.textField}
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
                    CLASS.map((c, k) => <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>)
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
                className={style.textField}
                onChange={this.handleChangeSubCategorieTextInput}
                margin="normal"
              />
            ) : (
              null
            )
          }
          
          
        </div>
      </div>
    );
  }
}