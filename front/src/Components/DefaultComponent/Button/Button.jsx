import React from 'react';
import {
  Link,
  TextLeft,
  TextRight,
  Button,
} from './style';

export default class Btn extends React.Component {
  render() {
    console.log(this.props);
    const { text, link, to, left, right, icon } = this.props;

    if (link) {
      return (
        <Link href={to}>
          {
            left 
              ? (<TextLeft>{icon}{text}</TextLeft>) 
              : right 
                ? (<TextRight>{text}{icon}</TextRight>)
                : (text)
          }
        </Link>
      );
    } else {
      return (
        <Button>
          {
            left 
              ? (<TextLeft>{icon}{text}</TextLeft>) 
              : right 
                ? (<TextRight>{text}{icon}</TextRight>)
                : (text)
          }
        </Button>
      );
    }
  }
}