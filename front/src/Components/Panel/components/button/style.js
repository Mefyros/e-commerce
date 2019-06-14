import { css } from '@emotion/core';
import Color from '../../../Color';

export const box = css`
    margin: 2vh;
`;

export const button = css`
    background-color: ${Color.madForMango} !important;
    border: solid 1px ${Color.lightGrey} !important;
    border-radius: 3px !important;
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01) !important;
    padding: .7em 1.1em !important;
    margin-right: 2em !important;
    text-transform: none !important;

    &:hover {
      cursor: pointer;
      background-color: ${Color.madForMangoHover} !important;
      box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1) !important;
    }
`;

export const buttonSmall = css`
    background-color: ${Color.madForMango} !important;
    border-radius: 3px !important;
    border: solid 1px ${Color.lightGrey} !important;
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01) !important;
    padding: .35em .55em !important;
    text-transform: none !important;

    &:hover {
      cursor: pointer !important;
      background-color: ${Color.madForMangoHover} !important;
      box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1) !important;
    }
`;