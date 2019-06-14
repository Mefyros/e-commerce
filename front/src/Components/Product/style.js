import { css } from '@emotion/core';
import Color from '../Color';


export const root = css`
  flex-grow: 1;
`;

export const paper = css`
  padding: .5em;
  text-align: center;
  color: ${Color.lightGrey};
`;

export const zozio = css`
  width: 100%;
  height: 100%;
`;

export const paperpay = css`
  margin-top: 50px;
  font-size: 39px;
  padding: .5em;
  text-align: center;
  color: ${Color.lightGrey};
`;

export const paperdesc = css`
  margin-top: 15px;
  padding: .5em;
  text-align: center;
  color: ${Color.lightGrey};
`;

export const paperprice = css`
  margin-top: 34px;
  color: red;
  padding: .5em;
  text-align: center;
`;

export const button = css`
  background-color: ${Color.madForMango} !important;
  border: solid 1px ${Color.lightGrey} !important;
  border-radius: 3px !important;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01) !important;
  padding: .7em 1.1em !important;

  &:hover {
    cursor: pointer;
    background-color: ${Color.madForMangoHover} !important;
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1) !important;
  }
`;