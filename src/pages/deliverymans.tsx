import ReactTooltip from "react-tooltip";
import SearchBar from "-/components/SearchBar";
import Column from "-/components/Colunm";
import { DeliverymanCards } from "-/components/DeliverymanCard/styles";
import DeliverymanCard from "-/components/DeliverymanCard";

const Deliverymans = () => {
  return (
    <>
      <ReactTooltip clickable backgroundColor="#1BD741" />
      <Column>
        <SearchBar placeholder="Pesquisar entregadores..." />
        <DeliverymanCards>
          {[...Array(9)].map((_, index) => (
            <DeliverymanCard key={index} />
          ))}
        </DeliverymanCards>
      </Column>
    </>
  );
};

export default Deliverymans;
