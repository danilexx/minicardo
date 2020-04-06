import Column from "-/components/Colunm";
import styled from "-/lib/StyledComponents";

const Title = styled.h1`
  color: ${props => props.theme.black};
  font-size: 2rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Covid = () => {
  return (
    <Column>
      <Title>Dicas de Prevenção do COVID19</Title>
      <Image src="/images/metodos.png" />
    </Column>
  );
};

export default Covid;
