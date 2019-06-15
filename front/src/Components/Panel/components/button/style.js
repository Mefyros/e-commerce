import { css } from '@emotion/core';
import Color from '../../../Color';

const btnBorderRadius = '3px !important';
const btnPadding = '.35em .55em !important';
const btnBorder = `solid 1px ${Color.lightGrey} !important`;
const btnShadow = '-1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01) !important';
const btnHoverShadow = '-1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1) !important';

export default {
  buttonBox: css`
    margin: 2vh;
  `,
  
  addButton: css`
    background-color: ${Color.madForMango} !important;
    border-radius: ${btnBorderRadius};
    border: ${btnBorder};
    box-shadow: ${btnShadow};
    padding: ${btnPadding};
    text-transform: none !important;

    &:hover {
      cursor: pointer !important;
      background-color: ${Color.madForMangoHover} !important;
      box-shadow: ${btnHoverShadow};
    }
  `,

  editButton: css`
    background-color: #01a538 !important;
    border-radius: ${btnBorderRadius};
    border: ${btnBorder};
    box-shadow: ${btnShadow};
    padding: ${btnPadding};
    text-transform: none !important;

    &:hover {
      cursor: pointer !important;
      background-color: ${Color.darkGreen} !important;
      box-shadow: ${btnHoverShadow};
    }
  `,

  deleteButton: css`
    background-color: ${Color.lightRed} !important;
    border-radius: ${btnBorderRadius};
    border: ${btnBorder};
    box-shadow: ${btnShadow};
    padding: ${btnPadding};
    text-transform: none !important;

    &:hover {
      cursor: pointer !important;
      background-color: ${Color.red} !important;
      box-shadow: ${btnHoverShadow};
    }
  `,
}