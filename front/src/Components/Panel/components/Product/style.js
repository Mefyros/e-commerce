import { css } from '@emotion/core';
import Color from '../../../Color';

export default {
  container: css`
    width: 100%;
    margin: .4em 0 0 0;
    padding: .5em 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${Color.lightGrey}; 
  `,

  buttonContainer: css`
    display: flex;
  `,

  title: css`
    margin: 0;
    font-size: 1.2em;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
}