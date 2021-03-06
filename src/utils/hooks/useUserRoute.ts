import { useRouter } from "next/router";
import { parseCookies } from "nookies";
// import { useStoreState } from "-/lib/EasyPeasy";
import isServer from "../isServer";

const useUserRoute = (toPath: string = "/login"): void => {
  if (isServer()) return;
  const router = useRouter();
  const { token } = parseCookies();
  const isLoggedIn = Boolean(token);

  if (!isLoggedIn) {
    router.push(toPath);
  }
};

export default useUserRoute;
