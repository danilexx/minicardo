import { darken } from "polished";
import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  /* background-color: #0051ad; */
  /* background-color: ${props => props.theme.black}; */
  width: 55%;
  max-width: 800px;
  margin: 2rem 0;
  height: fit-content;
  cursor: pointer;
  margin-bottom: 4rem;
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

  /* @media screen and (max-width: 1000px) {
  } */
`;

export const Bottom = styled.div`
  background-color: ${props => darken(0.1, props.theme.primary)};
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Recs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Rec = styled.div<{ active?: boolean }>`
  width: 6rem;
  height: 1rem;
  background-color: ${props => props.theme.white};
  opacity: ${props => (props.active ? 1 : 0.4)};
  margin: 0 1rem;
  cursor: pointer;
`;
