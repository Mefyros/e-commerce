import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../Color';
import LabelData from './label';


const centerMedia = css`
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`;

const EcoLabelContainer = styled.div`
  ${centerMedia}
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
`;

const EcoLabel = styled.div`
  width: 75px;
  height: 75px;
  margin: .2em 2em;
  background-color: ${Color.white};
  border: 2px solid ${Color.ecoBrown};
  border-radius: 50%;
  box-shadow: ${Color.shadow};
  position: relative;
`;

const LabelImage = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 50%;
`;

const LabelTooltipContainer = styled.div`
  position: absolute;
  top: 85px;
  left: -15px;
  border: 1px solid ${Color.ecoGreenHover};
  padding: .2em .4em;
  border-radius: 3px;
  background-color: ${Color.white};
  box-shadow: ${Color.shadow};
  min-width: 100px;
`;

const LabelTooltipText = styled.p`
  margin: 0;
  text-align: center;
`;

const Tooltip = text => (
  <LabelTooltipContainer>
    <LabelTooltipText>{text}</LabelTooltipText>
  </LabelTooltipContainer>
);

const Label = label => (
  <EcoLabel>
    <LabelImage src={label.image}/>
    {Tooltip(label.tooltip)}
  </EcoLabel>
);

export default class Labels extends React.Component {
  render() {
    return (
      <EcoLabelContainer>
        {
          LabelData.map((label, key) => Label(label))
        }
      </EcoLabelContainer>
    );
  }
}