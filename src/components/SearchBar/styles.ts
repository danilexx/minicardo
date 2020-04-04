import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0;
`;
export const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  font-size: 2rem;
  min-width: 0;
  border: 1px solid ${props => props.theme.borderGray};
`;
export const SearchButton = styled.button`
  border: none;
  background-color: ${props => props.theme.secondary};
  font-size: 2rem;
  color: ${props => props.theme.white};
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const SearchIcon = styled.img.attrs({
  src: "/icons/search.svg"
})`
  width: 2rem;
  height: 2rem;
`;
