import styled from "-/lib/StyledComponents";

export const Container = styled.div<{ secondary: boolean }>`
  width: 100%;
  background-color: ${props =>
    props.secondary ? props.theme.secondary : props.theme.primary};
  padding: 1.5rem 0;
`;

export const Title = styled.h1`
  color: ${props => props.theme.white};
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
`;

export const SeeMore = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.white};
  cursor: pointer;
`;

export const RightArrow = styled.img.attrs({
  src: "/icons/right_arrow.svg"
})`
  width: 3rem;
  height: 2rem;
`;
