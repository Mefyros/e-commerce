import { css } from '@emotion/core';
import Color from '../Color';

export const header = css`
  flex-grow: 1;
  position: fixed;
  box-shadow: -1px 1px 5px 1px rgba(0,0,0,.25);
`;

export const button = css`
  border-radius: 0;

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const searchbar = css`
display: block;
margin-left: auto;
margin-right: auto;
`;

export const searchChildren = css`
display: flex;
justify-content: center;
`;

export const searchSelect = css`
background-color: transparent;
border: solid 1px ${Color.lightOrange};
width: 10em;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
`;

export const searchSubmit = css`
background-color: transparent;
border: solid 1px ${Color.lightOrange};
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;

`;

export const searchInput = css`
background-color: transparent;
border: none;
border-top: solid 1px ${Color.lightOrange};
border-bottom: solid 1px ${Color.lightOrange};
padding-top: 2px;
padding-bottom: 2px;
padding-left: 8px;
padding-right: 8px;
`;

export const buttonend = css`

`;

export const appendBar = css`
  z-index: 1;
  border: 1px solid #8fd6a0;
  width: 350px;
  position:absolute;
  border-radius: 50px;
  top: 73px;
  background-color: white;

  span {
    color: ${Color.white};
  }
`;

export const appendBarDropDownButton = css`
  border-radius: 100%;
  background-color: 'red';
`;

export const categorieComp = css`
  border-radius: 10%;
  background-color: 'red';
`;

export const cardList = css`
  border-right: 1px solid #8fd6a0;
  border-top: 1px solid #8fd6a0;
  padding-top: 20px;
`;

export const subListDiv = css`
  border: 2px solid #8fd6a0;
  padding: 30px;
  max-width: 54em;
  min-width: 18em;
`;

export const ccscLink = css`
  transition-duration: 200ms;

  &:hover {
    color: ${Color.ecoGreen};
    text-decoration: underline;
  }
`;
