import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 42px; */

  padding: 32px;

  background-color: #b3b8c9;

  min-width: 320px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;