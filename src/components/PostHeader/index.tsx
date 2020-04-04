import Link from "next/link";
import Column from "../Colunm";
import VesgoRow from "../VesgoRow";
import { Container, Title, SeeMore, RightArrow } from "./styles";

export interface PostHeaderProps {
  label: string;
  seeMoreLink: string;
  secondary?: boolean;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  label,
  seeMoreLink,
  secondary = false
}) => {
  return (
    <Container secondary={secondary}>
      <Column>
        <VesgoRow>
          <Title>{label}</Title>
          <Link href={seeMoreLink}>
            <SeeMore>
              Ver mais <RightArrow />
            </SeeMore>
          </Link>
        </VesgoRow>
      </Column>
    </Container>
  );
};

export default PostHeader;
