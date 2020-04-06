import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { useFormContext, Controller } from "react-hook-form";
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
  const { register, errors } = useFormContext();
  // const inputRef = useRef<HTMLInputElement>(null);
  // const { fieldName, defaultValue, registerField, error } = useField(name);
  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     path: "value",
  //     ref: inputRef.current
  //   });
  // }, [fieldName, registerField]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput id={name} name={name} ref={register} {...rest} />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
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
  // const inputRef = useRef<HTMLInputElement>(null);
  // const { fieldName, defaultValue, registerField, error } = useField(name);
  const { control, errors } = useFormContext();
  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     path: "value",
  //     ref: inputRef.current
  //   });
  // }, [fieldName, registerField]);
  return (
    <Container
      style={{
        width
      }}
    >
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <Controller
        as={<StyledMaskInput mask={mask} />}
        name={name}
        control={control}
        onChange={([e]) => {
          return e.target.value;
        }}
      />

      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Container>
  );
};
export default Input;
