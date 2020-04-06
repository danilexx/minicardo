import {
  Container,
  Image,
  Content,
  Head,
  Cell,
  Rows,
  Row,
  ProductPrice,
  ProductName,
  None
} from "./styles";
import { User } from "-/services";
import { useStoreState } from "-/lib/EasyPeasy";
import EditButton from "../EditButton";

interface Props {
  user: User;
}

const PostSection: React.FC<Props> = ({ user }) => {
  const { products, post, id } = user;
  const userId = useStoreState(state => state.user.id);
  return (
    <Container>
      <Image src={post?.url || "/images/samples/post.png"} />
      <Content>
        {products.length > 0 ? (
          <>
            <Head>
              <Cell size="80%">Produto</Cell>
              <Cell size="20%">Preço</Cell>
            </Head>
            <Rows>
              {products.map(({ id: productId, name, price }) => (
                <Row key={productId}>
                  <ProductName>{name}</ProductName>
                  <ProductPrice>{price}</ProductPrice>
                </Row>
              ))}
            </Rows>
          </>
        ) : (
          <None>Nenhum Produto Cadastrado Ainda</None>
        )}
      </Content>
      {id === userId && <EditButton href="/profile" />}
    </Container>
  );
};

export default PostSection;
