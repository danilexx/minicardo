import {
  Container,
  Image,
  Content,
  Head,
  Cell,
  Rows,
  Row,
  ProductPrice,
  ProductName
} from "./styles";

const PostSection = () => {
  return (
    <Container>
      <Image />
      <Content>
        <Head>
          <Cell size="80%">Produto</Cell>
          <Cell size="20%">Preço</Cell>
        </Head>
        <Rows>
          <Row>
            <ProductName>Ovo de Pascoa Recheado de Hershey’s</ProductName>
            <ProductPrice>R$ 80,00</ProductPrice>
          </Row>
          <Row>
            <ProductName>Ovo de Pascoa Recheado de Hershey’s</ProductName>
            <ProductPrice>R$ 80,00</ProductPrice>
          </Row>
          <Row>
            <ProductName>Ovo de Pascoa Recheado de Hershey’s</ProductName>
            <ProductPrice>R$ 80,00</ProductPrice>
          </Row>
          <Row>
            <ProductName>Ovo de Pascoa Recheado de Hershey’s</ProductName>
            <ProductPrice>R$ 80,00</ProductPrice>
          </Row>
        </Rows>
      </Content>
    </Container>
  );
};

export default PostSection;
