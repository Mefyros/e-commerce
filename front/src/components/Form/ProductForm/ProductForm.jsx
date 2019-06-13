import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.display_spec = [];
        this.state = {
          sendedTry : false,
          error : {
            price : false,
            name : false,
            description : false,
            file: false,
            specifications: false,
          },
                categories : [
            {
              value: 'tv',
              label: 'TV'
            },
            {
              value: 'phone',
              label: 'Phone',
            },
            {
              value:'photo',
              label:'Photo'
            }
        ],
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
  }

addSpec = () => {
    const specification_object = this.state.specification;
     specification_object.push({name: '', specification: ''});

    this.setState({ nbr_spec: this.state.nbr_spec + 1, specification: specification_object });
    this.appendDisplaySpec();
  }

appendDisplaySpec() {
        this.display_spec.push(<Grid container direction="row" justify="space-evenly" alignItems="baseline">
        <InputLabel htmlFor="age-simple">Type
                <Select style={{height: 30, width: 100}} value='select' name={"select-"+this.state.nbr_spec} onChange={this.HandleSpecChange.bind(this)}>>
                  {
                    this.state.categories.map((categorie, key) => <MenuItem key={key} value={categorie.value}>{categorie.label}</MenuItem>)
                  }
                  </Select></InputLabel>
        <TextField label="Specification" margin="normal" name={"spec-"+this.state.nbr_spec} onChange={this.HandleSpecChange.bind(this)}/>
        </Grid>);
        this.setState({
           showdata : this.display_spec,
           postVal : ""
        });
     }

sendData(){
    console.log('send');
    var formData = new FormData();
    formData.append('name',this.state.name);
    formData.append('description', this.state.description);
    formData.append('specifications', this.state.specification);
    formData.append('photos', this.state.file[0]);
    formData.append('price', this.state.price);
    console.log(this.state.file);

    axios.post(`http://127.0.0.1:8000/api/product`, formData, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

async checkError(context){
  var checked = false;
  if (this.state.sendedTry == true) {
      var error = this.state.error;
      if (typeof this.state.file === "undefined") {
        error.file = true;
        await this.setState({error: error});
      }else {
        error.file = false;
        await this.setState({error: error});
      }
      if (typeof this.state.specification.length <= 0) {
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
    console.log(this.state.error.specifications);
  await this.setState({sendedTry : true});
  await this.checkError(true);
}

    render() {
        var spec_error = <p style={{color: 'red'}}></p>
        if (this.state.error.specifications == false && this.state.sendedTry == true) {
            var spec_error = <p style={{color: 'red'}}>Veuillez Ajouter au moin une specification</p>
        }else {
            var spec_error = <p style={{color: 'red'}}></p>
        }
        return(
                <form style={{marginTop: 50}} encType="multipart/form-data" noValidate autoComplete="off">
                    <Container maxWidth="sm">
                        <TextField error={this.state.error.name} helperText='Required' fullWidth label="Nom de l'annonce" margin="normal" name='name' onChange={this.handleInputChange}/>
                    </Container>
                        <Container maxWidth="sm">
                            <TextField error={this.state.error.description} helperText='Required' fullWidth multiline={true} rows={10} label="Description" name='description' margin="normal" variant="outlined" onChange={this.handleInputChange}
                        />
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
                        {this.display_spec.map((item) => {
                            return item;
                        })}
                    </Container>
                    <Container style={{marginTop: 35}} maxWidth="sm">
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                        <input style={{display: 'none'}} name="file" type="file" id="file" multiple onChange={this.handleInputChange} />
                        <label htmlFor="file">
                            <Button variant="outlined"  component="span">
                                Ajouter des images a votre annonce
                            </Button>
                        </label>
                        </Grid>
                    </Container>
                    <Container style={{marginTop: 35}} maxWidth="sm">
                        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
                            {spec_error}
                        </Grid>
                        </Container>

                    <Container style={{marginTop:20}} maxWidth="sm">
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
