import { lighten, darken } from "polished";
import styled, { css } from "-/lib/StyledComponents";

export const Container = styled.div`
  background-color: ${props => props.theme.primary};
  width: 100%;
  position: sticky;
  padding: 1rem 0;
  top: 0;
  z-index: 50;
  @media screen and (max-width: 650px) {
    height: 8rem;
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img.attrs({
  src: "/icons/logo.svg"
})`
  cursor: pointer;
  width: 15rem;
  @media screen and (max-width: 650px) {
    width: 20rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const commonButtonStyles = css`
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.5rem;
  min-width: 12.5rem;
  color: ${props => props.theme.white};
  background-color: transparent;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  ${commonButtonStyles};
  border: 1px solid ${props => props.theme.white};
`;
export const RegisterButton = styled.button`
  ${commonButtonStyles};
  background-color: ${props => props.theme.secondary};
`;

export const HorizontalSeparator = styled.div`
  display: block;
  height: 3rem;
  width: 1px;
  margin: 0 0.5rem;
  background-color: ${props => lighten(0.3, props.theme.primary)};
`;

export const Anchor = styled.a`
  font-size: 1.7rem;
  margin: 0 0.5rem;
  color: ${props => props.theme.white};
  text-decoration: none;
`;

export const MenuButton = styled.img.attrs({
  src: "/icons/hamburguer-menu.svg"
})`
  width: 4rem;
  height: 4rem;
  &:active {
    transform: scale(0.9);
  }
  z-index: 65;
  /* position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%); */
`;

export const Menu = styled.div<{ active?: boolean }>`
  background-color: ${props => darken(0.1, props.theme.primary)};
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 90%;
  max-width: 300px;
  transition: transform 0.2s ease-in-out;
  transform: ${props => (props.active ? "translateX(0%)" : "translateX(100%)")};
  z-index: 60;
  padding: 0 2rem;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  ${LoginButton}, ${RegisterButton} {
    margin: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: normal;
  }
  ${Anchor} {
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    font-weight: normal;
    text-align: center;
    background-color: ${props => props.theme.primary};
  }
`;
