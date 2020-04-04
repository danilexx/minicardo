// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { OptionTypeBase } from "react-select";
import { Props as AsyncProps } from "react-select/async";
import { useField } from "@unform/core";
import { lighten } from "polished";
import { Select, Spacer } from "./styles";
import {
  Container,
  ErrorMessage,
  StyledLabel
} from "-/components/Input/styles";
import { ThemeContext } from "-/lib/StyledComponents";
import Spinner from "../Spinner";

interface Props {
  name: string;
  isMulti: boolean;
  label: string;
  width?: string;
  placeholder?: string;
}

const CustomLoadingIndicator = () => {
  return (
    <Spacer>
      <Spinner loading />
    </Spacer>
  );
};

const AsyncSelect: React.FC<Props & AsyncProps<OptionTypeBase>> = ({
  label,
  name,
  width = "100%",
  isMulti = false,
  placeholder,
  ...rest
}) => {
  const theme = React.useContext(ThemeContext);
  const customStyles = React.useMemo(
    () => ({
      option: (provided, state) => {
        return {
          ...provided,
          color: state.isSelected ? theme.white : theme.black,
          backgroundColor: (() => {
            if (state.isSelected) {
              return theme.secondary;
            }
            if (state.isFocused) {
              return lighten(0.3, theme.secondary);
            }
            return theme.white;
          })(),
          padding: "1rem",
          fontSize: "1.5rem",
          fontFamily: "Roboto",
          cursor: "pointer"
        };
      }
    }),
    [theme]
  );
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "select.state.value",
      getValue: (ref: any) => {
        if (isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value
          );
        }
        if (!ref.select.state.value) {
          return "";
        }
        return ref.select.state.value.value;
      }
    });
  }, [fieldName, registerField, isMulti]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <Select
        components={{
          LoadingIndicator: CustomLoadingIndicator
        }}
        defaultOptions
        cacheOptions
        placeholder={placeholder || "Selecione..."}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        styles={customStyles}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default AsyncSelect;
