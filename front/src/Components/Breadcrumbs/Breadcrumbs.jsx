import React from 'react';
import { css } from 'emotion';
import style, {
  Container,
  BreadLink,
  BreadLinkHome,
  Arrow,
} from './style';

export default (props) => {
  return (
    <Container>
      <BreadLinkHome href="/">
        <i className={`fas fa-home ${css(style.homeIcon)}`}></i>
        Home
        <Arrow />
      </BreadLinkHome>

      {
        props.links.map((link, key) => (
          <BreadLink key={key} href={link.url} >
            {link.name}
            <Arrow />
          </BreadLink>
        ))
      }
    </Container>
  );
}

