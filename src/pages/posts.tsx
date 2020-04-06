/* eslint-disable react/jsx-wrap-multilines */
import ReactTooltip from "react-tooltip";
import { useRouter } from "next/router";
import { useList, useThrottle } from "react-use";
import InfiniteScroll from "react-infinite-scroll-component";
import { CustomLoadingIndicator } from "-/components/AsyncSelect";
import SearchBar from "-/components/SearchBar";
import Column from "-/components/Colunm";
import PostCard, { PostCards } from "-/components/PostCard";
import { ServerPosts } from "-/services";
import ScrollableWrapper from "-/components/ScrollableWrapper";
import { EndMessage } from "-/components/EndMessage";
import Results from "-/components/Results";

const Posts = ({
  initialPosts = [],
  initialTotal = 0,
  initialPage = 1,
  pages
}) => {
  const router = useRouter();
  const [page, setPage] = React.useState(initialPage);
  const [total, setTotal] = React.useState(initialTotal);
  const [posts, { set, push }] = useList<any>(initialPosts);
  const { search: searchParams } = router.query;
  const [search, setSearch] = React.useState((searchParams as string) || "");
  React.useEffect(() => {
    if (search !== searchParams) {
      router.push(`/posts?search=${search}`, `/posts?search=${search}`, {
        shallow: true
      });
    }
    if (search === "") {
      router.push(`/posts`, `/posts`, {
        shallow: true
      });
    }
  }, [search]);
  const searchValue = useThrottle(search, 1000);
  const handleSearch = async () => {
    const {
      data: { users: newPosts, total: newTotal }
    } = await ServerPosts.get({
      searchParams: searchValue,
      page: 1
    });
    setPage(1);
    setTotal(newTotal);
    set(newPosts);
  };
  React.useEffect(() => {
    handleSearch();
  }, [searchValue]);

  const fetchMoreData: any = async () => {
    const {
      data: { users: newPosts, total: newTotal }
    } = await ServerPosts.get({
      searchParams: searchValue,
      page: page + 1
    });
    set([...posts, ...newPosts]);
    setPage(page + 1);
    setTotal(newTotal);
  };
  return (
    <>
      <Column>
        <SearchBar
          value={search}
          onAction={handleSearch}
          noAction
          onChange={e => setSearch(e.target.value)}
        />
        <Results>
          {total} Resultado{total !== 1 && "s"}
        </Results>
        <ScrollableWrapper>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={page !== pages}
            loader={CustomLoadingIndicator}
            endMessage={
              <EndMessage> Você visualizou todos os posts</EndMessage>
            }
          >
            <PostCards>
              {posts.map((user, index) => (
                <PostCard user={user} key={index} />
              ))}
            </PostCards>
          </InfiniteScroll>
        </ScrollableWrapper>
      </Column>
    </>
  );
};

Posts.getInitialProps = async ctx => {
  const { search = "" } = ctx.query;
  const {
    data: { users: posts, total, pages }
  } = await ServerPosts.get({
    searchParams: search,
    page: 1
  });
  return {
    initialPosts: posts,
    initialTotal: total,
    pages
  };
};

export default Posts;
