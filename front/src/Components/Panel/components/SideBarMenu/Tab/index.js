import React from 'react';
import * as S from './style';

export default class Tab extends React.Component {
  render() {
    const { label, icon, onClick } = this.props;

    return (
      <S.Container onClick={onClick}>
        <S.IconLeft className={icon.props.class}/>
        <S.Label>{label}</S.Label>
        <S.IconRight className="fas fa-chevron-right"/>
        <S.IconDown className="fas fa-chevron-down"/>
      </S.Container>
    )
  }
}