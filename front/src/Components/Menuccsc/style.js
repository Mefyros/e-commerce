import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../Color';

export default {
  titleContainer: css`
    width: 300px !important;
    margin: 0 !important;
    margin-left: 32px !important;
    padding: 0 !important;
    border: 1px solid ${Color.lightGrey};
    border-bottom: none;
  `,

  cardContainer: css`
    width: 100% !important;
    border: 1px solid ${Color.lightGrey};
    margin-left: 32px !important;
    margin-right: 32px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: flex;
    flex-wrap: wrap;
  `,
}

export const Title = styled.h2`
  width: calc(100% - 3em);
  margin: 0;
  margin-left: 3em;
  padding: .5em 1em;
  font-size: 1.2em;
  font-weight: bold;
`;