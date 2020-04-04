import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import {
  StyledInput,
  StyledLabel,
  Container,
  ErrorMessage,
  StyledMaskInput
} from "./styles";

interface Props {
  name: string;
  label?: string;
  flex?: number;
  width?: string;
}
type InputProps = JSX.IntrinsicElements["input"] & Props;
const Input: React.FC<InputProps> = ({
  name,
  label,
  width = "100%",
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current
    });
  }, [fieldName, registerField]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <StyledInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export const MaskedInput: React.FC<{ mask: string } & InputProps> = ({
  name,
  label,
  width = "100%",
  mask,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current
    });
  }, [fieldName, registerField]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}

      <StyledMaskInput
        mask={mask}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default Input;
