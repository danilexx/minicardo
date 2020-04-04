import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import PostSection from "-/components/PostSection";
import SearchBar from "-/components/SearchBar";
import Author from "-/components/Author";

const Post = () => {
  return (
    <Column>
      <SearchBar />
      <VesgoRow align="flex-start">
        <PostSection />
        <Author />
      </VesgoRow>
    </Column>
  );
};

export default Post;
