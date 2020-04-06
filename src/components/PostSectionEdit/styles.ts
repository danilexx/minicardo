import { darken } from "polished";
import styled, { css } from "-/lib/StyledComponents";

export const Container = styled.div`
  background-color: ${props => props.theme.black};
  width: 55%;
  max-width: 800px;
  margin: 1rem 0;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    min-width: initial;
    max-width: initial;
  }
`;

export const Image = styled.img.attrs({
  src: "/images/samples/post.png"
})`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
`;

export const Content = styled.div`
  background-color: ${props => props.theme.white};
  /* border: 1px solid ${props => props.theme.borderGray}; */
  border-top: none;

`;

export const Head = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: row;
`;

const common = css`
  font-size: 2rem;
  padding: 1rem 1.5rem;
  @media screen and (max-width: 500px) {
    padding: 0.2rem;
    font-size: 1.8rem;
  }
`;

export const Cell = styled.div<{ size: string }>`
  width: ${props => props.size};
  color: ${props => props.theme.white};
  ${common}
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.borderGray};
  border-top: none;
  /* &:nth-child(odd) {
    background-color: ${props => props.theme.white};
  } */
  /* &:nth-child(even) {
    background-color: ${props => props.theme.borderGray};
  } */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  &:nth-of-type(even) {
    background-color: #eaeaea;
  }
`;

export const ProductName = styled.div`
  width: 80%;
  color: ${props => props.theme.black};
  ${common}
`;
export const ProductPrice = styled.div`
  width: 20%;
  color: ${props => props.theme.secondary};
  ${common}
`;
export const ProductPriceField = styled.input<{ size?: any }>`
  width: ${props => props.size || "20%"};
  color: ${props => props.theme.secondary};
  ${common}
`;
export const ProductNameField = styled.input<{ size?: any }>`
  width: ${props => props.size || "60%"};
  color: ${props => props.theme.black};
  ${common}
`;

export const AppendButton = styled.button<{ size: string }>`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.secondary};
  width: ${props => props.size};
  display: flex;
  flex-direction: row;
  border: none;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => darken(0.1, props.theme.secondary)};
  cursor: pointer;
`;

export const DeleteButton = styled(AppendButton)`
  background-color: ${props => props.theme.danger};
  border: 1px solid ${props => darken(0.1, props.theme.danger)};
`;

export const Plus = styled.img.attrs({
  src: "/icons/plus.svg"
})`
  width: 2rem;
  height: 2rem;
`;
export const TrashCan = styled.img.attrs({
  src: "/icons/trash.svg"
})`
  width: 2rem;
  height: 2rem;
`;
export const Edit = styled.img.attrs({
  src: "/icons/edit.svg"
})`
  width: 2rem;
  height: 2rem;
`;
