import { css } from '@emotion/core';
import Color from '../Color';

export default {
  header: css`
    flex-grow: 1;
    position: fixed;
    box-shadow: -1px 1px 5px 1px rgba(0,0,0,.2);
    background-color: ${Color.white} !important;
  `,
  
  button: css`
    border-radius: 0;
  
    &:hover {
      background-color: transparent;
      transform: scale(1.05);
      text-decoration: underline;
      cursor: pointer;
    }
  `,
  
  searchbar: css`
    display: block;
    margin-left: auto;
    margin-right: auto;
  `,
  
  searchChildren: css`
    display: flex;
    justify-content: center;
  `,
  
  searchSelect: css`
    background-color: transparent;
    border: solid 1px ${Color.lightOrange};
    width: 10em;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  `,
  
  searchSubmit: css`
    background-color: transparent;
    border: solid 1px ${Color.lightOrange};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  `,
  
  searchInput: css`
    background-color: transparent;
    border: none;
    border-top: solid 1px ${Color.lightOrange};
    border-bottom: solid 1px ${Color.lightOrange};
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
  `,
  
  appendBarDropDownButton: css`
    border-radius: 100%;
    background-color: 'red';
  `,
}
