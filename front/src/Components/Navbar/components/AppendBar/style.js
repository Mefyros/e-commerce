import { css } from '@emotion/core';
import Color from '../../../Color';

export default {
  appendBar: css`
    z-index: 1;
    border: 1px solid #8fd6a0;
    width: 350px;
    position: absolute;
    border-radius: 50px;
    top: 73px;
    background-color: white;
  
    span {
      color: ${Color.white};
    }
  `,
}
