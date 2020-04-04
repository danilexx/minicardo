import styled from "-/lib/StyledComponents";

const HideableSection = styled.div<{ hidden: boolean }>`
  opacity: ${props => (props.hidden ? "0" : "1")};
`;

export default HideableSection;
