import ReactTooltip from "react-tooltip";
import Link from "next/link";
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
import isServer from "-/utils/isServer";

export { DeliverymanCards } from "./styles";

interface User {
  id: number;
  name: string;
  productType: string;
  zap: string;
  post?: {
    url: string;
  };
  icon?: {
    url: string;
  };
}

interface Props {
  user: User;
}

const DeliverymanCard: React.FC<Props> = ({ user }) => {
  const { name, zap, id, icon } = user;
  return (
    <>
      <Link href="/deliveryman/[id]" as={`/deliveryman/${id}`}>
        <Container>
          <DeliverymanPhoto
            src={icon?.url || "/images/samples/deliveryman.png"}
          />
          <Bottom>
            <Info>
              <Name>{name}</Name>
              <Description>Entregador</Description>
            </Info>
            <Zap
              data-type="light"
              data-class="zap-tool"
              data-tip={zap}
              data-effect="solid"
            >
              <ZapImage />
            </Zap>
          </Bottom>
        </Container>
      </Link>
      <ReactTooltip clickable backgroundColor="#1BD741" />
    </>
  );
};

export default DeliverymanCard;
