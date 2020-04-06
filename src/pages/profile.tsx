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
import Footer from "-/components/Footer";
import ViewButton from "-/components/ViewButton";
import useUserRoute from "-/utils/hooks/useUserRoute";

const Profile = ({ user }) => {
  useUserRoute();
  const type = useStoreState(state => state.user.type);
  if (type === "deliveryman") {
    return (
      <>
        <DeliverymanEdit defaultValues={{ ...user.address, ...user }} />
        <Footer />
      </>
    );
  }
  if (type === "trader") {
    return (
      <>
        <Column>
          <SearchBar />
          <VesgoRow align="flex-start">
            <PostSectionEdit
              defaultValues={{ products: user.products, post: user.post }}
            >
              <ViewButton href="/post/[id]" as={`/post/${user.id}`} />
            </PostSectionEdit>
            <AuthorEdit defaultValues={{ ...user.address, ...user }} />
          </VesgoRow>
        </Column>
        <Footer />
      </>
    );
  }
  return null;
};

Profile.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  const { data: user } = await ServerUser.get(token);
  return { user };
};

export default Profile;
