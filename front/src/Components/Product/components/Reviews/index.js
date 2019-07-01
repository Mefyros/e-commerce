import React from 'react';
import * as S from './style';
import ReviewItem from './Item';

import fakeReview from './fakeReviews';

export default class Reviews extends React.Component {
  render() {
    return  (
      <S.Container>
      {
        fakeReview.map((review) => <ReviewItem key={review.id} review={review}/>)
      }
    </S.Container>
  )}
}