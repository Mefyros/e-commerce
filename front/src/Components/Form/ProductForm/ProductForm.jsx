import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';


//Services
import CategoryService from '../../../Service/CategoryService.js';
import SubCatService from '../../../Service/SubCatService.js'
import SpecService from '../../../Service/SpecService.js'

import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.display_spec = [];
        this.state = {
          input_label_categorie: null,
          sendedTry : false,
          fileButtonColor : 'primary',
          error : {
            price : false,
            name : false,
            description : false,
            file: false,
            specifications: false,
            categorie: false,
            sub_categorie: false,
          },
          id_categorie : null,
          id_sub_categorie: null,
          categorie_list: [],
          sub_categorie_list: [],
          specification_list : [],
          specification : [],
          showdata : this.displayData,
          postVal : "",
          nbr_spec: 0,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.appendDisplaySpec = this.appendDisplaySpec.bind(this);
        this.sendData = this.sendData.bind(this);
        this.checkError = this.checkError.bind(this);
        this.submit = this.submit.bind(this);
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
        await this.checkError(false);
  }

    async HandleSpecChange(event) {
      const type = event.target.name.split('-')[0];
      const nbr_in = event.target.name.split('-')[1];
      const value = event.target.value;
      var specification_object = this.state.specification;

      if (type == 'select') {
        specification_object[nbr_in].name = value;
      }
      if (type == 'spec') {
        specification_object[nbr_in].specification = value;
      }
      var error = this.state.error;
      error.specifications = false;
      this.setState({error: error})
      console.log(this.state.specification);
  }

    async HandleCategorieChange(event) {
      var id_categorie = event.target.value;
      this.setState({id_categorie: id_categorie});
      for (var i = 0; i < this.state.categorie_list.length; i++) {
        if (this.state.categorie_list[i].id === id_categorie) {
          await this.setState({sub_categorie_list: this.state.categorie_list[i].children});
          break;
        }
      }
      var error = this.state.error;
      error.categorie = false;
      this.setState({error: error});
      this.display_spec = [];
      await this.setState({specification: [], nbr_spec: 0});

      this.forceUpdate();
    }

    async handleSubCategorieChange(event) {
      var id_sub_categorie = event.target.value;
      await this.setState({id_sub_categorie: id_sub_categorie});
      var error = this.state.error;
      error.sub_categorie = false;
      await this.setState({error: error});
      var specs = await SpecService.getByIdCategori(this.state.id_sub_categorie);
      await this.setState({specification_list: specs});
      this.display_spec = [];
      this.forceUpdate();
    }

    addSpec = () => {
        const specification_object = this.state.specification;
         specification_object.push({name: '', specification: ''});

        this.setState({ nbr_spec: this.state.nbr_spec + 1, specification: specification_object });
        this.appendDisplaySpec2();
      }

    appendDisplaySpec() {
            this.display_spec = [];
            var i = 0;
            this.state.specification.map((item) => {
            var index = i;
            this.display_spec.push(<Grid container direction="row" justify="space-evenly" alignItems="baseline">
            <InputLabel>Type</InputLabel>
                    <Select fullWidth input={<OutlinedInput/>}  style={{height: 30, width: 100}} value={item.name} name={"select-"+i} onChange={this.HandleSpecChange.bind(this)}>>
                      {
                        this.state.specification_list.map((specs, key) => <MenuItem key={key} value={specs.name}>{specs.name}</MenuItem>)
                      }
                      </Select>
            <TextField variant="outlined"  label="Specification" margin="normal" name={"spec-"+i} value={item.value} onChange={this.HandleSpecChange.bind(this)}/>
            <Button onClick={() => this.deleteSpec(index)} textSecondary style={{color:'red'}} variant="outlined" color="secondary">
                Delete
            </Button>
            </Grid>);
            console.log(i);
            i++;
          });
                console.log(this.state.specification);
            this.setState({
               showdata : this.display_spec,
               postVal : ""
            });
         }

         appendDisplaySpec2 () {
           console.log('appendDisplaySpec2:', this.state.specification);
                 return (
                 this.state.specification.map((item, i) =>
                 <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                 <InputLabel>Type</InputLabel>
                         <Select fullWidth input={<OutlinedInput/>}  style={{height: 30, width: 100}} value={item.name} name={"select-"+i} onChange={this.HandleSpecChange.bind(this)}>>
                           {
                             this.state.specification_list.map((specs, key) => <MenuItem key={key} value={specs.name}>{specs.name}</MenuItem>)
                           }
                           </Select>
                 <TextField variant="outlined"  label="Specification" margin="normal" name={"spec-"+i} value={item.specification} onChange={this.HandleSpecChange.bind(this)}/>
                 <Button id={'delete-' + i} onClick={() => this.deleteSpec(i)} textSecondary style={{color:'red'}} variant="outlined" color="secondary">
                     Delete
                 </Button>
                 </Grid>
               )
             );
            }

    async sendData(){
    console.log('send');
      var formData = new FormData();
        var file_array = [];
        var temp = [];
        for (let [key, value] of Object.entries(this.state.file)) {
          formData.append('photos[]', value);
        }
        for (let [key, value] of Object.entries(this.state.specification)) {
          formData.append('specifications['+value.name+']', value.specification);
        }
        formData.append('sub_categorie_id', this.state.id_sub_categorie);
        formData.append('name',this.state.name);
        formData.append('description', this.state.description);
        formData.append('photos', file_array);
        formData.append('price', this.state.price);

       await axios.post(`/api/product`, formData, {headers: {'Content-Type': 'multipart/form-data' }})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    async checkError(context){
      var checked = false;
      if (this.state.sendedTry == true) {
          var error = this.state.error;
          if (this.state.id_sub_categorie == null) {
            error.sub_categorie = true;
            await this.setState({error: error});
          }else {
            error.sub_categorie = false;
            await this.setState({error: error});
          }
          if (this.state.id_categorie == null) {
            error.categorie = true;
            await this.setState({error: error});
          }else {
            error.categorie = false;
            await this.setState({error: error});
          }
          if (typeof this.state.file === "undefined") {
            error.file = true;
            await this.setState({error: error, fileButtonColor: 'secondary'});
          }else {
            error.file = false;
            await this.setState({error: error, fileButtonColor: 'primary'});
          }
          if (this.state.specification.length <= 0) {
            error.specifications = true;
            await this.setState({error: error});
          }else {
            error.specifications = false;
            await this.setState({error: error});
          }
          if (typeof this.state.name === "undefined" || this.state.name === "") {
            error.name = true;
            await this.setState({error: error});
          }else {
            error.name = false;
            await this.setState({error: error});
          }
          if (typeof this.state.description === "undefined" || this.state.description === "") {
            error.description = true;
            await this.setState({error: error});
          }else {
            error.description = false;
            await this.setState({error: error});
          }
          if (typeof this.state.price === "undefined" || this.state.price === "" || !Number.isInteger(parseInt(this.state.price))) {
            error.price = true;
            await this.setState({error: error});
          }else {
            error.price = false;
            await this.setState({error: error});
          }
          for (let [key, value] of Object.entries(this.state.error)) {
            if (value == true) {
              checked = false;
              break;
            }else {
              checked = true;
            }
          }
          if (checked == true && context == true) {
            this.sendData();
          }
        }
      }

    async submit(){
      await this.setState({sendedTry : true});
      await this.checkError(true);
}

    async componentDidMount() {
      var res = await CategoryService.getAll();
      await this.setState({categorie_list : res});
    }


    //To finish soon
    async deleteSpec(index){
        var spec_temp = [];
        console.log(index);
        //await this.setState({nbr_spec: this.state.nbr_spec - 1});
        var spec = this.state.specification;
        for (var i = 0; i < spec.length; i++) {
          if (i !== index) {
            spec_temp.push(spec[i]);
          }
        }
        await this.setState({specification: spec_temp});
        console.log('Delete: ', this.state.specification);
    }

    render() {
        var spec_error = <p style={{color: 'red'}}></p>
        if (this.state.error.specifications == true && this.state.sendedTry == true) {
            var spec_error = <p style={{color: 'red'}}>Veuillez Ajouter au moin une specification</p>
        }else {
            var spec_error = <p style={{color: 'red'}}></p>
        }
        if (this.state.sub_categorie_list.length <= 0) {
          var categories_container = <Grid container direction="row" justify="space-evenly" alignItems="baseline">
          <InputLabel ref={'categorie'} htmlFor="categorie">Categorie</InputLabel>
          <Select error={this.state.error.categorie} input={<OutlinedInput/>} name='categorie_choice' onChange={this.HandleCategorieChange.bind(this)} value={this.state.id_categorie} fullWidth>
          {
            this.state.categorie_list.map((categorie, key) => <MenuItem key={key} value={categorie.id}>{categorie.name}</MenuItem>)
          }
          </Select>
          </Grid>
        }else {
          var categories_container = <Grid container direction="row" justify="space-evenly" alignItems="baseline">
          <InputLabel ref={'categorie'} htmlFor="categorie">Categorie</InputLabel>
          <Select error={this.state.error.categorie}  input={<OutlinedInput/>} name='categorie_choice' onChange={this.HandleCategorieChange.bind(this)}  value={this.state.id_categorie} fullWidth>
          {
            this.state.categorie_list.map((categorie, key) => <MenuItem key={key} value={categorie.id}>{categorie.name}</MenuItem>)
          }
          </Select>
          <InputLabel style={{marginTop: 20}} ref={'sub_categorie'}>Sous categories</InputLabel>
          <Select error={this.state.error.sub_categorie}  input={<OutlinedInput/>} name='sub_categorie_choice' value={this.state.id_sub_categorie} onChange={this.handleSubCategorieChange.bind(this)} fullWidth>
          {
            this.state.sub_categorie_list.map((sub, key) => <MenuItem key={key} value={sub.id}>{sub.name}</MenuItem>)
          }
          </Select>
          </Grid>
        }
        return(
                <form encType="multipart/form-data" noValidate autoComplete="off" style={{marginBottom: 30}}>
                    <Container maxWidth="sm">
                        <TextField error={this.state.error.name} helperText='Required' fullWidth label="Nom de l'annonce" margin="normal" name='name' onChange={this.handleInputChange}/>
                    </Container>
                        <Container maxWidth="sm">
                            <TextField error={this.state.error.description} helperText='Required' fullWidth multiline={true} rows={10} label="Description" name='description' margin="normal" variant="outlined" onChange={this.handleInputChange}
                        />
                    </Container>
                    <Container maxWidth="sm">
                      {categories_container}
                    </Container>
                    <Container maxWidth="sm">
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                            <TextField error={this.state.error.price} helperText='Required' label="Prix" name='price' margin="normal" variant="outlined" onChange={this.handleInputChange}/>
                            <Button variant="outlined" color="primary" onClick={this.addSpec}>
                                Specifications +
                            </Button>
                        </Grid>
                    </Container>
                    <Container maxWidth="sm">
                        {this.appendDisplaySpec2()}
                    </Container>
                    <Container style={{marginTop: 35}} maxWidth="sm">
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                        <input style={{display: 'none'}} name="file" type="file" id="file" multiple onChange={this.handleInputChange} />
                        <label htmlFor="file">
                            <Button color={this.state.fileButtonColor} variant="outlined"  component="span">
                                Ajouter des images a votre annonce
                            </Button>
                        </label>
                        </Grid>
                    </Container>
                    <Container maxWidth="sm">
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                            {spec_error}
                        </Grid>
                        </Container>

                    <Container maxWidth="sm">
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                            <Button variant="outlined" color="primary" onClick={this.submit}>
                                Ajouter
                            </Button>
                        </Grid>
                        </Container>
                </form>
        );
    }
}
