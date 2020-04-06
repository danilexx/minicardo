import Link from "next/link";
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

const Footer = ({ ...props }: any) => {
  return (
    <Container {...props}>
      <Column>
        <FooterRow>
          <Sections>
            <Logo />
            <Section>
              <SectionTitle>Seções</SectionTitle>
              <Link href="/posts" passHref>
                <Anchor>Produtos</Anchor>
              </Link>
              <Link href="/deliverymans" passHref>
                <Anchor>Entregadores</Anchor>
              </Link>
            </Section>
            <Section>
              <SectionTitle>Redes Sociais</SectionTitle>
              <Anchor
                href="https://www.instagram.com/_minicardo/"
                target="_blank"
              >
                Instagram
              </Anchor>
              {/* <Anchor>Twitter</Anchor> */}
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
