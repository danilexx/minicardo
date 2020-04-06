import { lighten, darken } from "polished";
import styled from "-/lib/StyledComponents";
import VesgoRow from "../VesgoRow";

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary};
  padding: 1rem 0;
`;

export const Logo = styled.img.attrs({
  src: "/icons/logo.svg"
})`
  width: 15rem;
  margin: 1.5rem 0;
  margin-right: 1rem;
`;

export const Copyright = styled.a`
  color: ${props => lighten(0.2, props.theme.primary)};
  font-size: 1.5rem;
  &:hover {
    color: ${props => lighten(0.3, props.theme.primary)};
  }
  @media screen and (max-width: 360px) {
    font-size: 2.5rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1.5rem;
`;

export const FooterRow = styled(VesgoRow)`
  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  /* margin: 0 1rem; */
  margin: 0 auto;
  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

export const Anchor = styled.a`
  margin: 0;
  color: ${props => darken(0.1, props.theme.white)};
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
  &:hover {
    color: ${props => lighten(0.3, props.theme.primary)};
  }
`;

export const SectionTitle = styled.h1`
  margin: 0;
  color: ${props => darken(0.1, props.theme.white)};
`;
