import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  `;
  
  export const Area = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 32px 10px;
  margin: 0 auto;
`;

export const HeaderLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    margin-right: 10px;
  }

  h1 {
    color: #fff;
  }

  @media (max-width: 650px) {
    h1{
      font-size: 28px;
    }
  }

  @media (max-width: 390px) {
    h1{
      font-size: 25px;
    }
  }

`;

export const LinksArea = styled.div`
  width: 100%;
`;
