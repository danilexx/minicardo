/* eslint-disable react/jsx-wrap-multilines */
import ReactTooltip from "react-tooltip";
import { useRouter } from "next/router";
import { useList, useThrottle } from "react-use";
import InfiniteScroll from "react-infinite-scroll-component";
import { CustomLoadingIndicator } from "-/components/AsyncSelect";
import SearchBar from "-/components/SearchBar";
import Column from "-/components/Colunm";
import PostCard, { PostCards } from "-/components/PostCard";
import { ServerPosts, ServerDeliverymans } from "-/services";
import ScrollableWrapper from "-/components/ScrollableWrapper";
import { EndMessage } from "-/components/EndMessage";
import DeliverymanCard, {
  DeliverymanCards
} from "-/components/DeliverymanCard";
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
  const [deliverymans, { set, push }] = useList<any>(initialPosts);
  const { search: searchParams } = router.query;
  const [search, setSearch] = React.useState((searchParams as string) || "");
  React.useEffect(() => {
    if (search !== searchParams) {
      router.push(
        `/deliverymans?search=${search}`,
        `/deliverymans?search=${search}`,
        {
          shallow: true
        }
      );
    }
    if (search === "") {
      router.push(`/deliverymans`, `/deliverymans`, {
        shallow: true
      });
    }
  }, [search]);
  const searchValue = useThrottle(search, 1000);
  const handleSearch = async () => {
    const {
      data: { users: newDeliverymans, total: newTotal }
    } = await ServerDeliverymans.get({
      searchParams: searchValue,
      page: 1
    });
    setPage(1);
    setTotal(newTotal);
    set(newDeliverymans);
  };
  React.useEffect(() => {
    handleSearch();
  }, [searchValue]);

  const fetchMoreData: any = async () => {
    const {
      data: { users: newDeliverymans, total: newTotal }
    } = await ServerDeliverymans.get({
      searchParams: searchValue,
      page: page + 1
    });
    set([...deliverymans, ...newDeliverymans]);
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
          placeholder="Pesquisar Entregadores..."
          onChange={e => setSearch(e.target.value)}
        />
        <Results>
          {total} Resultado{total !== 1 && "s"}
        </Results>
        <ScrollableWrapper>
          <InfiniteScroll
            dataLength={deliverymans.length}
            next={fetchMoreData}
            hasMore={page !== pages}
            loader={CustomLoadingIndicator}
            endMessage={
              <EndMessage> Você visualizou todos os entregadores</EndMessage>
            }
          >
            <DeliverymanCards>
              {deliverymans.map((user, index) => (
                <DeliverymanCard user={user} key={index} />
              ))}
            </DeliverymanCards>
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
  } = await ServerDeliverymans.get({
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
