import styled from "-/lib/StyledComponents";

export const Container = styled.button`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.borderGray};
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const View = styled.img.attrs({
  src: "/icons/view.svg"
})`
  width: 2rem;
  height: 2rem;
`;

export const Text = styled.p`
  font-size: 2rem;
  margin: 0 2rem;
  color: ${props => props.theme.black};
`;
