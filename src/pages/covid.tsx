import Column from "-/components/Colunm";
import styled from "-/lib/StyledComponents";
import Title from "-/components/Title";

const Message = styled.h1`
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
    <>
      <Title message="Dicas de Prevenção do COVID19" />

      <Column>
        <Message>Dicas de Prevenção do COVID19</Message>
        <Image src="/images/metodos.png" />
      </Column>
    </>
  );
};

export default Covid;
