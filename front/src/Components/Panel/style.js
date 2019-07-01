import { css } from '@emotion/core';
import Color from '../Color';

export default {
  navContainer: css`
    display: flex;
    margin-top: 2em;
    margin-bottom: 2em;
    align-items: center;
  `,

  categorieContainer: css`
    border-left: 1px solid ${Color.lightGrey};
    background-color: ${Color.white};
  `,
}