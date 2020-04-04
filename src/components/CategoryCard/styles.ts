import styled from "-/lib/StyledComponents";

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem 0;
  /* margin-bottom: 2rem; */
`;

export const Container = styled.div`
  background: url("/images/categories/moda.png");
  flex: 1;
  display: flex;
  width: 15rem;
  min-width: 20rem;
  margin: 0.5rem;
  justify-content: center;
  /* &:last-of-type {
    margin-right: 0;
  } */
`;

export const CategoryName = styled.h1`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.white};
`;
