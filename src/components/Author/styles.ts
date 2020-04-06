import styled from "-/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 40%;
  max-width: 40rem;
  min-width: 200px;
  /* margin-left: 1rem; */

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
  justify-content: flex-start;
  padding: 1rem 3rem;
  /* height: 4rem; */
  position: relative;
  @media screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const AuthorPic = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  /* top: -50%; */
  /* transform: translateY(50%); */
  display: block;
  /* margin: 1rem; */
  /* margin-bottom: 2rem; */
  /* position: absolute; */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;

export const Name = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.white};
  text-transform: capitalize;
  margin: 0;
`;

export const Category = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.white};
  text-transform: capitalize;
  margin: 0;
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
  font-size: 1.8rem;
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
