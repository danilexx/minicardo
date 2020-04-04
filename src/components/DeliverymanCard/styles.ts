import styled from "-/lib/StyledComponents";

export const DeliverymanCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
  flex: 1;
  min-width: 30rem;
  background-color: ${props => props.theme.black};
`;

export const DeliverymanPhoto = styled.img.attrs({
  src: "/images/samples/deliveryman.png"
})`
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  height: auto;
  border: 1px solid ${props => props.theme.borderGray};
  border-bottom: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bottom = styled.div`
  background-color: ${props => props.theme.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Name = styled.h1`
  margin: 0;
  color: ${props => props.theme.white};
  font-size: 2.3rem;
  font-weight: 500;
`;

export const Description = styled.p`
  margin: 0;
  color: ${props => props.theme.white};
`;

export const Zap = styled.div`
  background-color: ${props => props.theme.white};
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  margin-left: auto;
`;

export const ZapImage = styled.img.attrs({
  src: "/icons/outlinedZap.svg"
})`
  width: 100%;
`;
