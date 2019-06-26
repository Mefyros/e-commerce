import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Tab = styled.option`

`;

export default class TabItem extends React.Component {
  render() {
    const { text, value } = this.props;
    
    return (
      <Tab value={value}>{text}</Tab>
    )
  }
}