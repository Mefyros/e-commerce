import {css} from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../Color';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.white};
  padding: 1.5em 2em;
  box-shadow: ${Color.shadow};
`;

const baseContainer = css`
  width: 100%;
`;

export const AboutsUsContainer = styled.div`
  ${baseContainer}
`;

export const CertificationContainer = styled.div`
  ${baseContainer}
  margin-top: 2em;
`;

export const PartnerContainer = styled.div`
  ${baseContainer}
  margin-top: 2em;

  h3 {
    margin-bottom: .5em;
  }
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 1em;
`;

export const Link = styled.a`
  margin: 0;
  color: ${Color.ecoGreenHover};

  &:hover {
    color: ${Color.ecoGreenHover};
    text-decoration: underline;
  }
`;