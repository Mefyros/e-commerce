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

const borderRadius = '.7em';

const defaultLink = css`
  display: flex;
  color: ${Color.white};
  background-color: ${Color.ecoGreen};
  padding: .7em 1em .7em 0;
  font-weight: 400;
  /* box-shadow: ${Color.hoverShadow}; */
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
  height: 50px;
  margin: 0;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: 768px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const BreadLinkHome = styled.a`
  ${defaultLink}
  padding-left: 1em;
  border-top-left-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
`;

export const BreadLink = styled.a`
  ${defaultLink}

  &:last-child {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    padding-right: 5em;

    i {
      visibility: hidden;
      position: absolute;
    }
  }
`;

export const Arrow = styled.i`
  width: 25px;
  transform: rotate(45deg);
  background-color: transparent;
  /* box-shadow: 0 1px 5px 0px rgba(0,0,0,.2); */
  border-top: 1px rgba(0,0,0,.1) solid;
  border-right: 1px rgba(0,0,0,.1) solid;
  box-shadow: 11px 0px 8px -10px rgba(0,0,0,.2),
              0px -11px 8px -10px rgba(0,0,0,.2); 
`;