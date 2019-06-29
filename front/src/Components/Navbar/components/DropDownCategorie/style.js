import { css } from '@emotion/core';
import Color from '../../../Color';

export default {
  dropDownBtn: css`
    border-radius: 20px !important;
    background-color: ${Color.ecoGreen} !important;

    &:hover {
      background-color: ${Color.ecoGreenHover} !important;
    }
  `,
}
