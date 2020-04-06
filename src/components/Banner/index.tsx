import Link from "next/link";
import { DisplayImage, Container } from "./styles";

const Banner = () => {
  return (
    <Link href="/covid">
      <Container>
        <DisplayImage src="/images/covid.png" />
      </Container>
    </Link>
  );
};

export default Banner;
