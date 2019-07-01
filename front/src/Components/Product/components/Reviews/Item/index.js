import React from 'react';
import * as S from './style';


export default class Item extends React.Component {
  render() {
    const { review } = this.props;

    return (
      <S.Container>
        <S.Header>
          <S.Username>{review.user}</S.Username>
          <S.Mark>mark: {review.mark}/5</S.Mark>
        </S.Header>
        <S.Content>{review.content}</S.Content>
      </S.Container>
    )
  }
}