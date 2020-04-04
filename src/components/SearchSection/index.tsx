import { useMedia } from "react-use";
import Column from "../Colunm";
import SearchBar from "../SearchBar";
import { Container } from "./styles";
import CategoryCard, { Categories } from "-/components/CategoryCard";

const SearchSection = () => {
  const isSmall = useMedia("(max-width: 500px)");
  return (
    <Container>
      <Column>
        <SearchBar />
        <Categories>
          {[...Array(4)].map((_, key) => (
            <CategoryCard key={key} />
          ))}
        </Categories>
        {isSmall || (
          <Categories>
            {[...Array(4)].map((_, key) => (
              <CategoryCard key={key} />
            ))}
          </Categories>
        )}
      </Column>
    </Container>
  );
};

export default SearchSection;
