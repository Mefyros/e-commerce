import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../../../Color';

export default {
  
}

export const Container = styled.div`
  margin: .5em 0;

  span, p {
    color: ${Color.darkGrey};
  }

  &:hover {
    button {
      background-color: transparent;
    }

    span, p {
      color: ${Color.ecoGreenHover};
    }
  }

  p {
    margin: 0;
  }
`;