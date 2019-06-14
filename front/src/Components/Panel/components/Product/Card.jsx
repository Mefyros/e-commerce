import React from 'react';
import DeleteButton from '../button/DeleteButton';
import EditButton from '../button/EditButton';
import { css } from 'emotion';
import { 
  container,
  title, 
  buttonContainer,
} from './style';

export default (props) => {
  return(
    <div className={css(container)}>
      <p className={css(title)}>{props.name}</p>
      <div className={css(buttonContainer)}>
        <DeleteButton productId={props.productId}/>
        <EditButton productId={props.productId}/>
      </div>
    </div>
  );
}