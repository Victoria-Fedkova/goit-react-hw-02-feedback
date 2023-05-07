import styled from "styled-components";

export const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto;
  padding: 32px;


  min-width: 320px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  } */

  display: flex;
    flex-direction: column;
    /* text-align: center; */
    /* background-color: rgba(179,178,176, 0.7); */
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
    /* color: white; */

    @media screen and (min-width: 576px) {
        max-width: 540px;
    }

    @media screen and (min-width: 768px) {
        max-width: 720px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1140px;
    }

`;
