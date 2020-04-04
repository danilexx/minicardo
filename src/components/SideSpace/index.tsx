import { Container, Content, TopBar } from "./styles";

interface SideSpaceProps {
  title: string;
}

const SideSpace: React.FC<SideSpaceProps> = ({ title, children }) => {
  return (
    <Container>
      <TopBar>{title}</TopBar>
      <Content>{children}</Content>
    </Container>
  );
};

export default SideSpace;
