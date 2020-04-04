import { useContext } from "react";
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

const PostCard = () => {
  return (
    <Link href="/post/[id]" as="/post/1">
      <Container>
        <CardHeader>
          <ProfileImage />
          <Info>
            <Name>Evan Edwards</Name>
            <Category>Feitos em Casa</Category>
          </Info>
          <Zap
            data-type="light"
            data-class="zap-tool"
            data-tip="11 55555-4444"
            data-effect="solid"
          >
            <ZapImage />
          </Zap>
        </CardHeader>
        <PostImage />
      </Container>
    </Link>
  );
};

export default PostCard;
