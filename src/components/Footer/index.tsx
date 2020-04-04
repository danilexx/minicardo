import Column from "../Colunm";
import {
  Container,
  Logo,
  Copyright,
  Sections,
  Section,
  SectionTitle,
  Anchor,
  FooterRow
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Column>
        <FooterRow>
          <Sections>
            <Logo />
            <Section>
              <SectionTitle>Seções</SectionTitle>
              <Anchor>Produtos</Anchor>
              <Anchor>Entregadores</Anchor>
              <Anchor>Login</Anchor>
              <Anchor>Cadastro</Anchor>
            </Section>
            <Section>
              <SectionTitle>Redes Sociais</SectionTitle>
              <Anchor>Facebook</Anchor>
              <Anchor>Twitter</Anchor>
            </Section>
          </Sections>
          <Copyright href="/services">
            Minicard Copyright 2020 <br />
            Termos e serviços
          </Copyright>
        </FooterRow>
      </Column>
    </Container>
  );
};

export default Footer;
