import Link from "next/link";
import { Container, CategoryName } from "./styles";

export { Categories } from "./styles";
const CategoryCard = ({ type, img }) => {
  return (
    <Link href={`/posts?search=${type}`}>
      <Container image={img}>
        <CategoryName>{type}</CategoryName>
      </Container>
    </Link>
  );
};

export default CategoryCard;
