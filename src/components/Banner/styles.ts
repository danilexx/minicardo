import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  background-color: #0051ad;
  width: 100%;
`;

export const DisplayImage = styled.img`
  width: fit-content;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
