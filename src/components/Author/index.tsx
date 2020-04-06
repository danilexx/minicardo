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
  Number,
  Category,
  Info
} from "./styles";
import { User } from "-/services";

interface Props {
  user: User;
  children?: React.ReactNode;
}

const Author: React.FC<Props> = ({ user, children }) => {
  const {
    icon,
    name,
    zap,
    productType,
    address: { cep, city, street, district, state }
  } = user;
  return (
    <Container>
      <AuthorInfos>
        <Head>
          <AuthorPic src={icon?.url || "/images/samples/author.png"} />
          <Info>
            <Name>{name}</Name>
            <Category>{productType}</Category>
          </Info>
        </Head>
        {/* <Map /> */}
        <Content>
          <Row>{street}</Row>
          <Row>
            {city} - {state}
          </Row>
          <Row>{district}</Row>
          <Row>{cep}</Row>
        </Content>
      </AuthorInfos>
      <Zap>
        <ZapIcon />
        <Number>{zap}</Number>
      </Zap>
      {children}
    </Container>
  );
};

export default Author;
