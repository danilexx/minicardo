import styled from "-/lib/StyledComponents";

export const PostCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
  flex: 1;
  min-width: 30rem;
  background-color: ${props => props.theme.black};
  cursor: pointer;
`;

export const CardHeader = styled.div`
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 1rem 2rem;
  max-height: 25rem;
`;

export const PostImage = styled.img.attrs({
  src: "/images/samples/post.png"
})`
  width: fit-content;
  height: auto;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.borderGray};
  border-top: none;
`;

export const ProfileImage = styled.img.attrs({
  src: "/images/samples/author.png"
})`
  width: 4rem;
  height: 4rem;
`;

export const Info = styled.div`
  margin-left: 2rem;
`;

export const Name = styled.h2`
  margin: 0.3rem 0;
  font-size: 2.2rem;
  font-weight: 500;
  color: ${props => props.theme.white};
`;

export const Category = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.white};
`;

export const Zap = styled.div`
  background-color: ${props => props.theme.zap};
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  margin-left: auto;
`;

export const ZapImage = styled.img.attrs({
  src: "/icons/zap.svg"
})`
  width: 100%;
`;
