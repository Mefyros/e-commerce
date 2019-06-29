import React from 'react';
import { Link } from "react-router-dom";
import { CardContainer, CardContent, Image, CardText, viewBtn } from './style';
import { css } from "emotion";
import Button from '../../DefaultComponent/Button';



export default class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
    }
    this.linkId = `${this.props.data.name}-${this.props.data.id}`;
    this.redirectLink = `${this.props.route}/${this.state.id}`;
  }

  render() {
    const { name } = this.state;
    const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';
    return (
      <CardContainer>
        <CardContent onClick={this.handleClick}>
          <Image src={fakePic} alt=""/>
          <CardText>
            <div>{name}</div>
            {/* <div className={css(viewBtn)}> View </div> */}
            <Button 
              buttonStyle={css(viewBtn)}
              link
              text="View"
              to={this.redirectLink}
            />
          </CardText>
        </CardContent>
      </CardContainer>
    );
  }
}
