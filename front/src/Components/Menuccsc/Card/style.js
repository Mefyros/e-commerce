import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../Color';

export default {
  
}

export const CardContainer = styled.div`
  width: 250px;
  height: 75px;
  border-radius: 0;
  margin: 1.5vh;
  border: 1px solid ${Color.lightGrey};
  transition-duration: 250ms;
  /* box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05); */

  &:hover {
    cursor: pointer;
    transform: scale(1.005);
    border-color: ${Color.grey};
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05);
    /* box-shadow: -1px -1px 5px 1px rgba(0,0,0,.1), 1px 1px 5px 1px rgba(0,0,0,.1); */
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 33%;
  height: 100%;
`;

export const CardText = styled.p`
  margin: 0;
  padding: 0 2em;
  font-size: 1.1em;
  transition-duration: 250ms;

  &:hover {
    color: ${Color.green};
  }
`;