import React from "react";
import Link from "next/link";
import { useMedia, useToggle } from "react-use";
import {
  Container,
  Logo,
  LoginButton,
  Actions,
  RegisterButton,
  Anchor,
  HorizontalSeparator,
  MenuButton,
  Menu
} from "./styles";
import Column from "../Colunm";
import VesgoRow from "../VesgoRow";
import { useStoreState } from "-/lib/EasyPeasy";
import ProfileIndicator from "../ProfileIndicator";

const Nav = () => {
  const isSmall = useMedia("(max-width:650px)");
  const isLoggedIn = useStoreState(state => state.user.isLogged);
  const [isMenuActive, toggle] = useToggle(false);
  if (isSmall) {
    return (
      <>
        <Container>
          <Column>
            <VesgoRow>
              <Link href="/" passHref>
                <a href="#">
                  <Logo />
                </a>
              </Link>
              <MenuButton
                onClick={() => {
                  toggle();
                }}
              />
            </VesgoRow>
          </Column>
          <Menu active={isMenuActive}>
            <Link href="/posts" passHref>
              <Anchor>Lojas</Anchor>
            </Link>
            <Link href="/deliverymans" passHref>
              <Anchor>Entregadores</Anchor>
            </Link>
            {isLoggedIn ? (
              <ProfileIndicator />
            ) : (
              <>
                <Link href="/login">
                  <LoginButton>Login</LoginButton>
                </Link>
                <Link href="/register">
                  <RegisterButton>Registrar</RegisterButton>
                </Link>
              </>
            )}
          </Menu>
        </Container>
      </>
    );
  }
  return (
    <Container>
      <Column>
        <VesgoRow>
          <Link href="/" passHref>
            <a href="#">
              <Logo />
            </a>
          </Link>
          <Actions>
            <Link href="/posts" passHref>
              <Anchor>Lojas</Anchor>
            </Link>
            <Link href="/deliverymans" passHref>
              <Anchor>Entregadores</Anchor>
            </Link>
            <HorizontalSeparator />
            {isLoggedIn ? (
              <ProfileIndicator />
            ) : (
              <>
                <Link href="/login">
                  <LoginButton>Login</LoginButton>
                </Link>
                <Link href="/register">
                  <RegisterButton>Registrar</RegisterButton>
                </Link>
              </>
            )}
          </Actions>
        </VesgoRow>
      </Column>
    </Container>
  );
};

export default Nav;
