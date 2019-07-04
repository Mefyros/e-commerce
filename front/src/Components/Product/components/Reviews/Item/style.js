import styled from '@emotion/styled';
import Color from '../../../../Color';
import { css } from '@emotion/core';

const baseText = css`
  font-size: 1em;
  margin: 0 .2em;
`;

export const Container = styled.div`
  border: 1px solid ${Color.grey};
  margin-top: .5em;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: 3px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: center;
  margin-bottom: 1em;
`;

export const Username = styled.p`
  ${baseText}
`;

export const Mark = styled.p`
  ${baseText}
`;

export const Content = styled.p`
  ${baseText}
`