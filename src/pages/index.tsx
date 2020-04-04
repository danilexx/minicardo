import ReactTooltip from "react-tooltip";
import Banner from "-/components/Banner";
import SearchSection from "-/components/SearchSection";
import PostHeader from "-/components/PostHeader";
import Featured from "-/components/Featured";
import PostCard, { PostCards } from "-/components/PostCard";
import { DeliverymanCards } from "-/components/DeliverymanCard/styles";
import DeliverymanCard from "-/components/DeliverymanCard";

const home = () => {
  return (
    <>
      <ReactTooltip clickable backgroundColor="#1BD741" />
      <Banner />
      <SearchSection />
      <Featured label="Posts Populares" seeMoreLink="posts">
        <PostCards>
          {[...Array(3)].map((_, index) => (
            <PostCard key={index} />
          ))}
        </PostCards>
      </Featured>
      <Featured
        label="Entregadores em Destaque"
        secondary
        seeMoreLink="deliverymans"
      >
        <DeliverymanCards>
          {[...Array(3)].map((_, index) => (
            <DeliverymanCard key={index} />
          ))}
        </DeliverymanCards>
      </Featured>
    </>
  );
};

export default home;
