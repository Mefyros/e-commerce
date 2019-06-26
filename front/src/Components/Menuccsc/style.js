import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../Color';

export default {
  titleContainer: css`
    width: 300px !important;
 
    padding: 0 !important;
    border: 1px solid ${Color.ecoBrown};
    border-radius: 30px;
    border-bottom: none;
    text-align: center;
    display: block;
    margin-left: auto !important;
    margin-right: auto !important;
  `,

  cardContainer: css`
    width: 100% !important;
    border: 1px solid ${Color.ecoBrown};
    margin-left: 32px !important;
    margin-right: 32px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: flex;
    flex-wrap: wrap;
  `,

}

export const Title = styled.h2`
 width: 100%;
  // width: calc(100% - 3em);
  margin: 0;
  /* margin-left: 3em; */
  padding: .5em 1em;
  font-size: 1.5em;
  font-weight: bold;
  font-style: Myriad Pro;
  color: ${Color.ecoGreen};
`;
