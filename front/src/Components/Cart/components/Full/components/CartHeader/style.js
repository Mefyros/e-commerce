import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../../../../Color';

const baseTitle = css`
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 300;
  user-select: none;
`;

export const Container = styled.div`
  width: 100%;
  height: 51px;
  border-bottom: 1px solid ${Color.grey};
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const NameTitle = styled.h6`
  ${baseTitle};
  flex: 6;
  border-right: 1px solid ${Color.grey};
`;

export const PriceTitle = styled.h6`
  ${baseTitle};
  flex: 2;
  border-right: 1px solid ${Color.grey};
`;

export const TotalTitle = styled.h6`
  ${baseTitle};
  flex: 2;
  border-right: 1px solid ${Color.grey};
`;

export const QuantityTitle = styled.h6`
  ${baseTitle};
  flex: 2;
  border-right: 1px solid ${Color.grey};
`;

export const ActionTitle = styled.h6`
  ${baseTitle};
  flex: 1;
  font-size: 1.5em;

  i {
    &:hover {
      cursor: pointer;
      color: ${Color.lightRed};
    }
  }
`;