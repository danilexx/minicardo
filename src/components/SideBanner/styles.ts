import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  background-color: #0051ad;
  /* background-color: ${props => props.theme.black}; */
  width: 55%;
  max-width: 800px;
  margin: 2rem 0;
  
  @media screen and (max-width: 642px) {
    width: 100%;
    margin: 1rem auto;
    min-width: initial;
    max-width: initial;
  }
`;

export const DisplayImage = styled.img`
  /* width: fit-content; */
  margin: 0 auto;
  display: block;
  width: 100%;
  margin-bottom: 4rem;
  /* @media screen and (max-width: 1000px) {
  } */
`;
