import { css } from '@emotion/core';
import Color from '../../../Color';

export default {
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
}
