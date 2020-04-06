import { parseCookies } from "nookies";
import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import PostSection from "-/components/PostSection";
import SearchBar from "-/components/SearchBar";
import Author from "-/components/Author";
import AuthorEdit from "-/components/AuthorEdit";
import PostSectionEdit from "-/components/PostSectionEdit";
import { useStoreState } from "-/lib/EasyPeasy";
import DeliverymanEdit from "-/components/DeliverymanEdit";
import { ServerUser } from "-/services";

const Profile = ({ user }) => {
  const type = useStoreState(state => state.user.type);
  if (type === "deliveryman") {
    return <DeliverymanEdit defaultValues={{ ...user, ...user.address }} />;
  }
  return (
    <Column>
      <SearchBar />
      <VesgoRow align="flex-start">
        <PostSectionEdit
          defaultValues={{ products: user.products, post: user.post }}
        />
        <AuthorEdit defaultValues={{ ...user, ...user.address }} />
      </VesgoRow>
    </Column>
  );
};

Profile.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  const { data: user } = await ServerUser.get(token);
  return { user };
};

export default Profile;
