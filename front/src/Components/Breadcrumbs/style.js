import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../Color';

export default {
  homeIcon: css`
    display: flex;
    align-items: center;
    margin-right: .3em;
    color: ${Color.white};
  `,
}

const defaultLink = css`
  display: flex;
  color: ${Color.white};
  padding: 0 .5em;
  background-color: ${Color.ecoGreen};
  padding: .7em 1em;
  font-weight: 400;
  box-shadow: ${Color.hoverShadow};
  font-size: 1em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${Color.white};
  }

  &:visited {
    color: ${Color.white};
  }
`;

export const Container = styled.div`
  width: auto;
  margin: 0;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 5px;

  @media (max-width: 768px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const BreadLinkHome = styled.a`
  ${defaultLink}
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const BreadLink = styled.a`
  ${defaultLink}

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-right: 5em;
  }
`;