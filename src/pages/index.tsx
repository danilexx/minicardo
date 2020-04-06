import ReactTooltip from "react-tooltip";
import Banner from "-/components/Banner";
import SearchSection from "-/components/SearchSection";
import PostHeader from "-/components/PostHeader";
import Featured from "-/components/Featured";
import PostCard, { PostCards } from "-/components/PostCard";
import DeliverymanCard, {
  DeliverymanCards
} from "-/components/DeliverymanCard";
import { ServerTrendingPosts, ServerTrendingDeliverymans } from "-/services";
import Footer from "-/components/Footer";

const home = ({ trendingPosts, trendingDeliverymans }) => {
  return (
    <>
      <Banner />
      <SearchSection />
      {trendingPosts.length > 0 && (
        <Featured label="Posts Populares" seeMoreLink="/posts">
          <PostCards>
            {trendingPosts.map((user, index) => (
              <PostCard key={index} user={user} />
            ))}
          </PostCards>
        </Featured>
      )}
      {trendingDeliverymans.length > 0 && (
        <Featured
          label="Entregadores em Destaque"
          secondary
          seeMoreLink="/deliverymans"
        >
          <DeliverymanCards>
            {trendingDeliverymans.map((user, index) => (
              <DeliverymanCard user={user} key={index} />
            ))}
          </DeliverymanCards>
        </Featured>
      )}
      <Footer />
    </>
  );
};

home.getInitialProps = async ctx => {
  const { data: trendingPosts } = await ServerTrendingPosts.get();
  const { data: trendingDeliverymans } = await ServerTrendingDeliverymans.get();
  return {
    trendingPosts,
    trendingDeliverymans
  };
};

export default home;
