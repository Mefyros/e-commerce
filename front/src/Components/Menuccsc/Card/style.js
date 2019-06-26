import styled from '@emotion/styled';
import Color from '../../Color';
import {css} from "@emotion/core";

export const CardContainer = styled.div`
  width: 275px;
  height: 212px;
  border-radius: 0;
  margin: 1.5vh;
  border: 1px solid ${Color.ecoBrown};
  transition-duration: 250ms;
  /* box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05); */

  &:hover {
    cursor: pointer;
    transform: scale(1.005);
    border-color: ${Color.ecoGreenHover};
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
  width: 40%;
  height: 100%;
`;

export const CardText = styled.p`
  margin: 0;
  padding: 0 2em;
  font-size: 1.1em;
  font-family: Myriad Pro;
  transition-duration: 250ms;

  &:hover {
    color: ${Color.green};
  }
`;

export const viewBtn = css`
   width: 7em;
  margin: 0;
  margin-top: 1em;
  border: 1px solid ${Color.green};
  border-radius: 30px;
  background-color: ${Color.ecoGreen};
  padding: .5em 1em;
  transition-duration: 200ms;
  box-shadow: ${Color.shadow};
  user-select: none;
  color: white;
  text-align: center;
`;