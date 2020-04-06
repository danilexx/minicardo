import ReactTooltip from "react-tooltip";
import Link from "next/link";
import {
  Container,
  CardHeader,
  ProfileImage,
  Info,
  Name,
  Category,
  PostImage,
  Zap,
  ZapImage
} from "./styles";
import { ThemeContext } from "-/lib/StyledComponents";

export { PostCards } from "./styles";

interface User {
  id: number;
  name: string;
  productType: string;
  zap: string;
  post?: {
    url: string;
  };
  icon?: {
    url: string;
  };
}

interface Props {
  user: User;
}

const PostCard: React.FC<Props> = ({ user }) => {
  const { id, name, productType, zap, post, icon } = user;
  return (
    <>
      <Link href="/post/[id]" as={`/post/${id}`}>
        <Container>
          <CardHeader>
            <ProfileImage src={icon?.url || "/images/samples/author.png"} />
            <Info>
              <Name>{name}</Name>
              <Category>{productType}</Category>
            </Info>
            <Zap
              data-type="light"
              data-class="zap-tool"
              data-tip={zap}
              data-effect="solid"
            >
              <ZapImage />
            </Zap>
          </CardHeader>
          <PostImage src={post?.url || "/images/samples/post.png"} />
        </Container>
      </Link>
      <ReactTooltip clickable backgroundColor="#1BD741" />
    </>
  );
};

export default PostCard;
