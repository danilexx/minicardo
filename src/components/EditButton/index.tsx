import Link from "next/link";
import { Container, Text, Edit } from "./styles";

interface Props {
  href: string;
}

const EditButton: React.FC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <Container>
        <Edit />
        <Text>Editar</Text>
      </Container>
    </Link>
  );
};

export default EditButton;
