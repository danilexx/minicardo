// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { OptionTypeBase } from "react-select";
import { Props as AsyncProps } from "react-select/async";
import { useField } from "@unform/core";
import { lighten } from "polished";
import { useFormContext, Controller } from "react-hook-form";
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
  isMulti?: boolean;
  label: string;
  width?: string;
  placeholder?: string;
  options?: any;
  defaultValue?: any;
}

export const CustomLoadingIndicator = () => {
  return (
    <Spacer>
      <Spinner loading />
    </Spacer>
  );
};

const SelectInput: React.FC<Props> = ({
  label,
  name,
  width = "100%",
  placeholder,
  options,
  defaultValue,
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
  const { control, errors } = useFormContext();

  // const selectRef = useRef(null);
  // const { fieldName, defaultValue, registerField, error } = useField(name);
  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: selectRef.current,
  //     path: "select.state.value",
  //     getValue: (ref: any) => {
  //       if (isMulti) {
  //         if (!ref.select.state.value) {
  //           return [];
  //         }
  //         return ref.select.state.value.map(
  //           (option: OptionTypeBase) => option.value
  //         );
  //       }
  //       if (!ref.select.state.value) {
  //         return "";
  //       }
  //       return ref.select.state.value.value;
  //     }
  //   });
  // }, [fieldName, registerField, isMulti]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      {/* <Select
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
      /> */}
      <Controller
        as={<Select options={options} />}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          // Place your logic here
          return selected;
        }}
        components={{
          LoadingIndicator: CustomLoadingIndicator
        }}
        placeholder={placeholder || "Selecione..."}
        classNamePrefix="react-select"
        styles={customStyles}
        name={name}
        defaultValue={defaultValue}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Container>
  );
};
export default SelectInput;
