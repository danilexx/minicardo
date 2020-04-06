import { useMedia } from "react-use";
import { useRouter } from "next/router";
import Column from "../Colunm";
import SearchBar from "../SearchBar";
import { Container } from "./styles";
import CategoryCard, { Categories } from "-/components/CategoryCard";
import DefaultSearchBar from "../SearchBar/default";
import { types, images } from "-/lib/ProductTypes";

const limit = (array: any[], l: number) => {
  const newArray = [...array];
  newArray.length = l;
  return newArray;
};

const SearchSection = () => {
  const isSmall = useMedia("(max-width: 500px)");
  return (
    <Container>
      <Column>
        <DefaultSearchBar />
        <Categories>
          {limit(types, isSmall ? 4 : 8).map((type, key) => (
            <CategoryCard img={images[key]} type={type} key={key} />
          ))}
        </Categories>
        {/* {isSmall || (
          <Categories>
            {[...Array(4)].map((_, key) => (
              <CategoryCard key={key} />
            ))}
          </Categories>
        )} */}
      </Column>
    </Container>
  );
};

export default SearchSection;
