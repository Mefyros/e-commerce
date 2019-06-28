import { css } from '@emotion/core';
import Color from '../../../Color';

export default {
  categorieComp: css`
    border-radius: 10%;
    background-color: 'red';
  `,
  
  cardList: css`
    border-right: 1px solid #8fd6a0;
    border-top: 1px solid #8fd6a0;
    padding-top: 20px;
  `,
  
  subListDiv: css`
    border: 2px solid #8fd6a0;
    padding: 30px;
    max-width: 54em;
    min-width: 18em;
  `,

  ccscLink: css`
    transition-duration: 200ms;

    &:hover {
      color: ${Color.ecoGreen};
      text-decoration: underline;
    }
  `,
}
