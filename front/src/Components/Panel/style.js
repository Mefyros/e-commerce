import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-left: 15%;

  @media (max-width: 1280px) {
    margin-left: 20%;
    width: 75%;
  }

  @media (max-width: 992px) {
    margin-left: 25%;
    width: 70%;
  }

  @media (max-width: 768px) {
    margin-top: 2em;
    margin-left: 0;
    width: 100%;
  }
`;