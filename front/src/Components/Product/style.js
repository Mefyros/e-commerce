import { css } from '@emotion/core';
import Color from '../Color';

export default {
  root: css`
    flex-grow: 1;
  `,

  paper: css`
    padding: .5em;
    text-align: center;
    color: ${Color.lightGrey};
  `,

  zozio: css`
    width: 100%;
    height: 100%;
  `,

  paperpay: css`
    margin-top: 50px;
    font-size: 39px;
    padding: .5em;
    text-align: center;
    color: ${Color.lightGrey};
    display: flex;
    align-content: center;
    justify-content: center;
  `,

  paperdesc: css`
    margin-top: 15px;
    padding: .5em;
    text-align: center;
    color: ${Color.lightGrey};
  `,

  paperprice: css`
    margin-top: 34px;
    color: red;
    padding: .5em;
    text-align: center;
  `,

  button: css`
    background-color: ${Color.madForMango} !important;
    border: solid 1px ${Color.lightGrey} !important;
    border-radius: 0px !important;
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01) !important;
    padding: .7em 1.1em !important;
    margin-left: 2em !important;

    &:hover {
      cursor: pointer;
      background-color: ${Color.madForMangoHover} !important;
      box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1) !important;
    }
  `,

  inStock: css`
    color: ${Color.green};
  `,

  notInStock: css`
    color: ${Color.red};
  `,

  price: css`
    font-size: 1em;
    margin: 0;
  `,
}
