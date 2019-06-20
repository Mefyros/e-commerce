import React from 'react';
import { Link } from "react-router-dom";
import { CardContainer, CardContent, Image, CardText } from './style';

export default class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
    }
    this.linkId = `${this.props.data.name}-${this.props.data.id}`;
    this.redirectLink = `${this.props.route}/${this.state.id}`;
  }

  handleClick = e => {
    const redirect = document.getElementById(this.linkId);
    redirect.click();
  }

  render() {
    const { name } = this.state;
    const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';
    return (
      <CardContainer>
        <CardContent onClick={this.handleClick}>
          <Image src={fakePic} alt=""/>
          <CardText>{name}</CardText>
          <Link id={this.linkId} to={this.redirectLink}/>
        </CardContent>
      </CardContainer>
    );
  }
}
