import {
  Container,
  DeliverymanPhoto,
  Bottom,
  Info,
  Name,
  Description,
  Zap,
  ZapImage
} from "./styles";

const DeliverymanCard = () => {
  return (
    <Container>
      <DeliverymanPhoto />
      <Bottom>
        <Info>
          <Name>Evan Edwards</Name>
          <Description>Entregador</Description>
        </Info>
        <Zap
          data-type="light"
          data-class="zap-tool"
          data-tip="11 55555-4444"
          data-effect="solid"
        >
          <ZapImage />
        </Zap>
      </Bottom>
    </Container>
  );
};

export default DeliverymanCard;
