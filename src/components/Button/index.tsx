import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
