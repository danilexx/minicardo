import Link from "next/link";
import { Container, Text, View } from "./styles";

interface Props {
  href: string;
  as?: string;
}

const ViewButton: React.FC<Props> = ({ href, as }) => {
  return (
    <Link href={href} as={as}>
      <Container>
        <View />
        <Text>Ver</Text>
      </Container>
    </Link>
  );
};

export default ViewButton;
