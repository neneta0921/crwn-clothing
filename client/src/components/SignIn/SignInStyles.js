import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 896px) {
    width: 100%;

    button {
      width: 240px;

      &:first-child {
        margin-bottom: 20px;
      }
    }

  }

  @media screen and (max-width: 480px) {

    button {
      width: 100%;
    }
  }
`;

export const SignInTitle = styled.h3`
  margin: 10px 0;
`;

export const ButtonBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 896px) {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;
