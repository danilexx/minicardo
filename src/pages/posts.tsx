import ReactTooltip from "react-tooltip";
import SearchBar from "-/components/SearchBar";
import Column from "-/components/Colunm";
import PostCard, { PostCards } from "-/components/PostCard";

const Posts = () => {
  return (
    <>
      <ReactTooltip clickable backgroundColor="#1BD741" />
      <Column>
        <SearchBar />
        <PostCards>
          {[...Array(9)].map((_, index) => (
            <PostCard key={index} />
          ))}
        </PostCards>
      </Column>
    </>
  );
};

export default Posts;
