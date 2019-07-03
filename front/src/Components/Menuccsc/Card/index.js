import React from 'react';
import * as S from './style';
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
      <S.CardContainer>
        <S.CardContent onClick={this.handleClick}>
          <S.Image src={fakePic} alt=""/>
          <S.CardText>
            <div>{name}</div>
            {/* <div className={css(viewBtn)}> View </div> */}
            <Button 
              buttonStyle={css(S.viewBtn)}
              link
              text="View"
              to={this.redirectLink}
            />
          </S.CardText>
        </S.CardContent>
      </S.CardContainer>
    );
  }
}