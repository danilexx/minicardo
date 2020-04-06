import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import PostSection from "-/components/PostSection";
import SearchBar from "-/components/SearchBar";
import Author from "-/components/Author";
import { ServerPosts, ServerDeliverymans } from "-/services";
import DefaultSearchBar from "-/components/SearchBar/default";
import SideBanner from "-/components/SideBanner";
import { useStoreState } from "-/lib/EasyPeasy";
import EditButton from "-/components/EditButton";
import Title from "-/components/Title";

const Deliveryman = ({ user }) => {
  const { id } = user;
  const userId = useStoreState(state => state.user.id);
  return (
    <Column>
      <Title message={user.name} />
      <DefaultSearchBar />
      <VesgoRow align="flex-start">
        {/* <PostSection user={user} /> */}
        <Author user={user}>
          {id === userId && <EditButton href="/profile" />}
        </Author>
        <SideBanner style={{ margin: "1rem 0" }} />
      </VesgoRow>
    </Column>
  );
};

Deliveryman.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const { data: user } = await ServerDeliverymans.getOne(id);
  return { user };
};

export default Deliveryman;
