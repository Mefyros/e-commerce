import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming'
import Color from '../Color';

const theme = {
  color: Color.ecoGreen,
}

const defaultButton = css`
  margin: 0;
  padding: .375em .7em;
  background-color: ${theme.color};
  font-weight: 400;
  border-radius: 3px;
  border: 1px solid ${Color.lightGreen};
  box-shadow: ${Color.shadow};
  color: ${Color.white};
  transition-duration: 200ms;
  font-size: 1em;
  display: block;

  &:hover {
    background-color: ${Color.ecoGreenHover};
    box-shadow: ${Color.hoverShadow};
  }

  &:focus {
    outline: none;
  }

  i {
    color: ${Color.white};
  }
`;

const Button = styled.button`
  ${defaultButton}
`;

const Link = styled.a`
  ${defaultButton}
  color: ${Color.white};

  &:hover {
    color: ${Color.white};
  }
`;

const baseTextIcon = css`
  margin: 0;
  color: ${Color.white};
  font-size: 1em;
`;

const TextLeft = styled.span`
  ${baseTextIcon}

  i {
    margin-right: .5em;
  }
`;

const TextRight = styled.span`
  ${baseTextIcon}

  i {
    margin-left: .5em;
  }
`;

export default class Btn extends React.Component {
  render() {
    // console.log(this.props);
    const { text, link, to, left, right, icon } = this.props;

    if (link) {
      return (
        <ThemeProvider theme={theme}>
          <Link href={to}>
            {
              left 
                ? (<TextLeft>{icon}{text}</TextLeft>) 
                : right 
                  ? (<TextRight>{text}{icon}</TextRight>)
                  : (text)
            }
          </Link>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Button onClick={this.props.onClick}>
            {
              left 
                ? (<TextLeft>{icon}{text}</TextLeft>) 
                : right 
                  ? (<TextRight>{text}{icon}</TextRight>)
                  : (text)
            }
          </Button>
        </ThemeProvider>
      );
    }
  }
}