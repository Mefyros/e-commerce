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
    min-width: 45% !important;
    margin-bottom: 2em !important;
  `,

  textField: css`
    min-width: 45% !important;
  `,
}

