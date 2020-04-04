import styled from "-/lib/StyledComponents";
import { Container as ButtonContainer } from "../Button/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  margin-bottom: 2rem;
  width: 40%;
  max-width: 40rem;
  min-width: 260px;

  @media screen and (max-width: 642px) {
    width: 100%;
    margin: 1rem auto;
    min-width: initial;
    max-width: initial;
  }
`;

export const Content = styled.div`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.borderGray};
  border-top: none;
  padding: 1.5rem 2rem;
  ${ButtonContainer} {
    margin: 1rem 0;
  }
`;

export const TopBar = styled.div`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-size: 2rem;
  text-align: center;
  padding: 1rem 1.25rem;
  font-weight: bold;
`;
