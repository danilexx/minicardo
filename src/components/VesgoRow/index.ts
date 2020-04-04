import styled from "-/lib/StyledComponents";

const VesgoRow = styled.div<{ justify?: string; align?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.align || "center"};
  flex-wrap: wrap;
`;

export default VesgoRow;
