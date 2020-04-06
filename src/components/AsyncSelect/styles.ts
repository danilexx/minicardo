import BaseSelect from "react-select";
import styled from "-/lib/StyledComponents";

export const Select = styled(BaseSelect)`
  .react-select__control {
    border: 1px solid ${props => props.theme.borderGray};
    border-radius: 0px;
    padding: 0rem;
    font-size: 1.5rem;
    font-family: Roboto;
    &:hover {
      border-color: ${props => props.theme.secondary};
    }
    &.react-select__control--is-focused {
      box-shadow: 0 0 0 1px ${props => props.theme.secondary};
    }
  }
`;

export const Spacer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
