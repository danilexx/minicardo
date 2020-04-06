import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  background-color: #4a839c;
  width: 100%;
  cursor: pointer;
  /* height: 20rem; */
`;

export const DisplayImage = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  display: block;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
