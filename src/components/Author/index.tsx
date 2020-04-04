import {
  Container,
  AuthorInfos,
  Head,
  AuthorPic,
  Name,
  Map,
  Content,
  Row,
  Zap,
  ZapIcon,
  Number
} from "./styles";

const Author = () => {
  return (
    <Container>
      <AuthorInfos>
        <Head>
          <AuthorPic />
          <Name>Evan Edwards</Name>
        </Head>
        <Map />
        <Content>
          <Row>Rua Santos Vicent, 270</Row>
          <Row>Alphaville - SP</Row>
          <Row>Vila Madeira Roaman</Row>
          <Row>08503-330</Row>
        </Content>
      </AuthorInfos>
      <Zap>
        <ZapIcon />
        <Number>11 55555-4444</Number>
      </Zap>
    </Container>
  );
};

export default Author;
