import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { css } from 'emotion';
import style from './style';

export default class CategorieManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classInputValue: "",
      categorieInputValue: "",
      subCategorieInputValue: "",
      classes: [],
    }
  }

  handleClassInputChange = e => {
    this.setState({ classInputValue: e.target.value });
    console.log(e.target.value)
  }

  handleCategorieInputChange = e => {
    this.setState({ categorieInputValue: e.target.value });
  }

  handleSubCategorieInputChange = e => {
    this.setState({ subCategorieInputValue: e.target.value });
  }

  render() {
    const { classInputValue, categorieInputValue, subCategorieInputValue } = this.state;

    return(
      <div className={css(style.container)}>
        <h4 className={css(style.title)}>Manage Class</h4>
        <div className={css(style.inputContainer)}>
          <FormControl className={css(style.formControl)}>
            <InputLabel shrink htmlFor="class-name">Class</InputLabel>
            <Select
              value={classInputValue}
              onChange={this.handleClassInputChange}
              displayEmpty
              name="class-name"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="new-class">New class</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={css(style.formControl)}>
            <InputLabel shrink htmlFor="categorie-name">Categorie</InputLabel>
            <Select
              value={categorieInputValue}
              onChange={this.handleCategorieInputChange}
              displayEmpty
              name="categorie-name"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="new-categorie">New categorie</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={css(style.formControl)}>
            <InputLabel shrink htmlFor="sub-categorie-name">Sub-Categorie</InputLabel>
            <Select
              value={subCategorieInputValue}
              onChange={this.handleSubCategorieInputChange}
              displayEmpty
              name="sub-categorie-name"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="new-sub-categorie">New sub-categorie</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}