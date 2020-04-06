import { useRouter } from "next/router";
import SearchBar from ".";

const DefaultSearchBar = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const handleAction = () => {
    router.push(`/posts?search=${search}`, `/posts?search=${search}`);
  };
  return (
    <SearchBar
      onChange={e => setSearch(e.target.value)}
      value={search}
      onAction={handleAction}
    />
  );
};

export default DefaultSearchBar;
