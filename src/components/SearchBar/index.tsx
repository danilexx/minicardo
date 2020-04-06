import React from "react";
import { useMedia } from "react-use";
import { Container, Input, SearchButton, SearchIcon, Form } from "./styles";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (element: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onAction?: () => void;
  noAction?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onAction,
  onChange,
  noAction,
  ...props
}) => {
  const isSmall = useMedia("(max-width:330px)");
  const handleSubmit = e => {
    e.preventDefault();
    if (onAction) {
      onAction();
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={onChange && onChange}
          value={value && value}
          placeholder={placeholder || "Pesquisar produtos..."}
        />
        {noAction || (
          <SearchButton type="submit">
            {isSmall ? <SearchIcon /> : "Pesquisar"}
          </SearchButton>
        )}
      </Form>
    </Container>
  );
};

export default SearchBar;
