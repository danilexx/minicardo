import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import PostSection from "-/components/PostSection";
import SearchBar from "-/components/SearchBar";
import Author from "-/components/Author";
import { ServerPosts } from "-/services";
import DefaultSearchBar from "-/components/SearchBar/default";

const Post = ({ user }) => {
  return (
    <Column>
      <DefaultSearchBar />
      <VesgoRow align="flex-start">
        <PostSection user={user} />
        <Author user={user} />
      </VesgoRow>
    </Column>
  );
};

Post.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const { data: user } = await ServerPosts.getOne(id);
  return { user };
};

export default Post;
