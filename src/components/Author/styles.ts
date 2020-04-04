import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 40%;
  max-width: 40rem;
  min-width: 200px;
  margin-left: 1rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    min-width: initial;
    max-width: initial;
  }
`;

export const AuthorInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Head = styled.div`
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  height: 4rem;
  position: relative;
  @media screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const AuthorPic = styled.img.attrs({
  src: "/images/samples/author.png"
})`
  width: 6rem;
  height: 6rem;
  top: -50%;
  transform: translateY(50%);
  left: 2rem;
  position: absolute;
`;

export const Name = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.white};
`;

export const Map = styled.img.attrs({
  src: "/images/samples/map.png"
})`
  width: 100%;
`;

export const Content = styled.div`
  border: 1px solid ${props => props.theme.borderGray};
  border-top: none;
  padding: 1rem 1rem;
`;

export const Row = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.black};
  margin-bottom: 0.2rem;
`;

export const Zap = styled.div`
  width: 100%;
  margin-top: 1rem;
  background-color: ${props => props.theme.zap};
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ZapIcon = styled.img.attrs({
  src: "/icons/zap.svg"
})`
  width: 4rem;
  height: 4rem;
`;

export const Number = styled.p`
  color: ${props => props.theme.white};
  font-size: 2rem;
  margin: 0;
  margin-left: 2rem;
  font-weight: bold;
`;
