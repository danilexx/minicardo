import { darken } from "polished";
import styled, { css } from "-/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0.5rem;
  cursor: pointer;
  position: relative;
`;

export const ProfileImage = styled.img.attrs({
  src: "/images/samples/author.png"
})`
  width: 4rem;
  height: 4rem;
`;

export const Arrow = styled.img.attrs({
  src: "/icons/down_arrow.svg"
})<{ flipped?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.2s ease-in-out;
  transform: ${props => (props.flipped ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const ProfileName = styled.p`
  color: ${props => props.theme.white};
  margin: 0 0.8rem;
  text-transform: capitalize;
`;

export const Popup = styled.div<{ active: boolean }>`
  opacity: ${props => (props.active ? 1 : 0)};
  width: 100%;
  background-color: ${props => darken(0.1, props.theme.primary)};
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translate(-50%, 100%);
`;

export const PopupAnchor = styled.a<{ exit?: boolean }>`
  font-size: 1.5rem;
  color: ${props => props.theme.white};
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  opacity: 0.9;
  border-bottom: 1px solid ${props => darken(0.1, props.theme.primary)};
  ${props =>
    props.exit &&
    css`
      background-color: ${props.theme.danger};
    `}
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    font-weight: normal;
    text-align: center;
    background-color: ${props =>
      props.exit ? props.theme.danger : props.theme.primary};
  }
`;
