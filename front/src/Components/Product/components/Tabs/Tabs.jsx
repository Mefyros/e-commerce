import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const TabsContainer = styled.select`

`;

export default class Tabs extends React.Component {
  render() {
    const { children, onChange, defaultTab } = this.props;

    return (
      <TabsContainer onChange={onChange} value={defaultTab}>
        {children}
      </TabsContainer>
    )
  }
}