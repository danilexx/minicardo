import Link from "next/link";
import { DisplayImage, Container, Bottom, Recs, Rec } from "./styles";
import { colors } from "-/lib/colors";

const images = ["/images/covid.png", "/images/doar.jpeg"];
const links = ["/covid", "https://www.atados.com.br/doe"];
const Banner = () => {
  const timer = React.useRef<any>();
  const [currentIndex, setIndex] = React.useState(0);
  const currentImage = React.useMemo(() => images[currentIndex], [
    currentIndex
  ]);
  const currentLink = React.useMemo(() => links[currentIndex], [currentIndex]);
  React.useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      if (currentIndex + 1 >= images.length) {
        setIndex(0);
      } else {
        setIndex(index => index + 1);
      }
    }, 5000);
  }, [currentIndex]);
  const handleClick = index => {
    clearInterval(timer.current);
    setIndex(index);
  };
  return (
    <Container bgColor={colors[currentIndex]}>
      <Link href={currentLink} passHref>
        <a target="_blank">
          <DisplayImage src={currentImage} />
        </a>
      </Link>
      <Bottom>
        <Recs>
          {[...Array(images.length)].map((_, index) => (
            <Rec
              onClick={() => {
                handleClick(index);
              }}
              active={index === currentIndex}
              key={index}
            />
          ))}
        </Recs>
      </Bottom>
    </Container>
  );
};

export default Banner;
