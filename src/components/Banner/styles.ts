import { darken } from "polished";
import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  display: block;
  background-color: #4a839c;
  width: 100%;

  /* height: 20rem; */
`;

export const DisplayImage = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  display: block;
  cursor: pointer;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
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
