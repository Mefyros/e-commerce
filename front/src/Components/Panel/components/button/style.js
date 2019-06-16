import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../../Color';

const btnBorderRadius = '0px !important';
const btnPadding = '.35em .55em !important';
const btnBorder = `solid 1px ${Color.lightGrey} !important`;
const btnShadow = '-1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05) !important';
const btnHoverShadow = '-1px -1px 5px 1px rgba(0,0,0,.1), 1px 1px 5px 1px rgba(0,0,0,.1) !important';

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
    margin-top: .9em !important;
    margin-right: 2em !important;
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
    margin-right: 1em !important;

    &:hover {
      cursor: pointer !important;
      background-color: ${Color.red} !important;
      box-shadow: ${btnHoverShadow};
    }
  `,

  stockButton: css`
    background-color: ${Color.madForMango} !important;
    border-radius: ${btnBorderRadius};
    border: ${btnBorder};
    box-shadow: ${btnShadow};
    padding: ${btnPadding};
    text-transform: none !important;
    margin-left: 1em !important;

    &:hover {
      cursor: pointer !important;
      background-color: ${Color.madForMangoHover} !important;
      box-shadow: ${btnHoverShadow};
    }
  `,

  saveButton: css`
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

  modalStyle: css`
    position: absolute !important;
    width: 400px !important;
    height: 200px !important;
    background-color: ${Color.white} !important;
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.2), 1px 1px 5px 1px rgba(0,0,0,.2) !important;
    padding: 2em !important;
    outline: none !important;
    top: 100px !important;
    left: calc(50vw - 200px) !important;
  `,
}

export const ModalTitle = styled.h5`
  margin: 0;
`;