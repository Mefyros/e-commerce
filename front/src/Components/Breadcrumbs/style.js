import { css } from '@emotion/core';
import Color from '../Color';

export default {
  root: css`
    padding: 1em 2em !important;
    margin-bottom: 2em !important;
    background-color: transparent !important;
  `,

  link: css`
    display: flex !important;
    background-color: ${Color.ecoGreen} !important;
  `,

  separator: css`
    display: flex !important;
    padding: 0 !important;
    margin: 0 !important;
    background-color: ${Color.ecoGreen} !important;
  `,

  icon: css`
    margin-right: .5em !important;
    width: 20px !important;
    height: 20px !important;
  `,
}