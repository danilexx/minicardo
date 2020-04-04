import styled from "-/lib/StyledComponents";

export const Container = styled.button`
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  /* margin: 0 0.5rem; */
  min-width: 12.5rem;
  color: ${props => props.theme.white};
  background-color: transparent;
  cursor: pointer;
  background-color: ${props => props.theme.secondary};
  width: 100%;
`;
