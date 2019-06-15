import { css } from '@emotion/core';
import Color from '../../../Color';

export default {
  container: css`
    width: 100%;
    margin: .4em 0 0 0;
    padding: .5em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* border: 1px solid ${Color.lightGrey};  */
  `,
  
  title: css`
    margin-bottom: 3em;
  `,

  inputContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  formControl: css`
    min-width: 200px !important;
    margin-bottom: 2em !important;
  `,

  textField: css`
    /* min-width: 45% !important; */
  `,

  buttonBox: css`
    margin: 2vh;
  `,

  button: css`
    background-color: ${Color.madForMango} !important;
    border: solid 1px ${Color.lightGrey} !important;
    border-radius: 3px !important;
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.01) !important;
    padding: .3em .7em !important;
    margin-top: 1em !important;
    text-transform: none !important;

    &:hover {
      cursor: pointer;
      background-color: ${Color.madForMangoHover} !important;
      box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.1) !important;
    }
  `,
}

