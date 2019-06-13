import React from 'react';
import Axios from 'axios';
import Card from './components/Card/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      products: [],
    }
  }

  componentDidMount = () => {
    Axios.get("http://127.0.0.1:8000/api/products")
      .then(res => {
        console.log(res);
        this.setState({
          isReady: true,
          products: [], 
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { isReady, products } = this.state;

    if (!isReady) {
      return(
        <>
        
        </>
      );
    }

    return(
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            {
              products.map((product, key) => <Card key={key} product={product}/>)
            }
          </Container>
        </React.Fragment>
      </>
    );
  }
}