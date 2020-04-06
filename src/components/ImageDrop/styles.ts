import styled from "-/lib/StyledComponents";

/* background-color: ${props => props.theme.bg1}; */
export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  margin: 1rem auto;
  display: flex;
  border: 0.5rem dashed ${props => props.theme.borderGray};
  position: relative;
  height: 15rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDisplay = styled.img`
  width: fit-content;
  height: auto;
  margin: 1rem auto;
  max-width: 100%;
`;

export const ResetImageIcon = styled.img.attrs({
  src: "/icons/trash.svg"
})`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.danger};
  width: 4rem;
  height: 4rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  /* height: fit-content; */
  position: relative;
  margin: 0 auto;
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  max-height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PostContainer = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  border: 0.5rem dashed ${props => props.theme.borderGray};
  position: relative;
  height: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostImageDisplay = styled.img`
  /* max-height: 100%; */
  /* height: 100%; */
  margin: 1rem auto;
  max-width: 100%;
  height: 100%;
  /* max-height: 20rem; */
`;
