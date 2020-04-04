import { lighten } from "polished";
import ReactInputMask from "react-input-mask";
import styled, { css } from "-/lib/StyledComponents";

export const Container = styled.div`
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const InputStyles = css`
  border: 1px solid ${props => props.theme.borderGray};
  padding: 1rem;
  font-size: 1.5rem;
  font-family: Roboto;
  &::placeholder {
    color: ${props => props.theme.borderGray};
  }
`;

export const StyledInput = styled.input<{ ref: any }>`
  ${InputStyles}
`;

export const StyledMaskInput = styled(ReactInputMask)`
  ${InputStyles}
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => lighten(0.3, props.theme.black)};
  width: 100%;
  text-align: left;
  margin: 0.4rem 0.5rem;
`;

export const ErrorMessage = styled.span`
  color: ${props => props.theme.danger};
  margin: 0.5rem;
  font-size: 1.5rem;
  font-family: Roboto;
  text-transform: capitalize;
`;
