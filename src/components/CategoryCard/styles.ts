import { parseToHsl, hsl, hsla, transparentize } from "polished";
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

export const Container = styled.div<{ image: string }>`
  background: ${props => transparentize(0.1, props.theme.primary)}
    url(${props => props.image});
  background-blend-mode: multiply;
  background-position: center;
  background-size: 100%;
  flex: 1;
  display: flex;
  width: 15rem;
  min-width: 20rem;
  margin: 0.5rem;
  justify-content: center;
  cursor: pointer;
  /* &:last-of-type {
    margin-right: 0;
  } */
`;

export const CategoryName = styled.h1`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.white};
`;
