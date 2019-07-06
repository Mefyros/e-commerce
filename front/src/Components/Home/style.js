import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../Color';

export const container = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const containerPopu = css`
    margin-top: 50px;
`;

export const popTitle = css `
    text-align: center;
    margin-bottom: 25px;
`;

const baseContainer = css`
  width: 100%;
`;

export const ValeurContainer = styled.div`
  margin: 2em 0;
  padding: 2em 0;
  background-color: ${Color.white};
  box-shadow: ${Color.shadow};
`;

export const AboutsUsContainer = styled.div`
  ${baseContainer}
`;

export const CertificationContainer = styled.div`
  ${baseContainer}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PartnerContainer = styled.div`
  ${baseContainer}
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const Partener = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  margin: 0;
  color: ${Color.ecoGreenHover};

  &:hover {
    color: ${Color.ecoGreenHover};
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  height: 75px;
  margin: 1em;
`;