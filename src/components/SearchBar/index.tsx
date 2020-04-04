import React from "react";
import { useMedia } from "react-use";
import { Container, Input, SearchButton, SearchIcon } from "./styles";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const isSmall = useMedia("(max-width:330px)");

  return (
    <Container>
      <Input placeholder={placeholder || "Pesquisar produtos..."} />
      <SearchButton>{isSmall ? <SearchIcon /> : "Pesquisar"}</SearchButton>
    </Container>
  );
};

export default SearchBar;
