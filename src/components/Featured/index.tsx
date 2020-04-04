import PostHeader, { PostHeaderProps } from "../PostHeader";
import { Container } from "./styles";
import Column from "../Colunm";

interface FeaturedProps extends PostHeaderProps {
  children?: React.ReactNode;
  secondary?: boolean;
}

const Featured: React.FC<FeaturedProps> = ({
  label,
  seeMoreLink,
  children,
  secondary = false
}) => {
  return (
    <Container>
      <PostHeader
        secondary={secondary}
        label={label}
        seeMoreLink={seeMoreLink}
      />
      <Column>{children && children}</Column>
    </Container>
  );
};

export default Featured;
