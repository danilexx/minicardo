import { useRouter } from "next/router";
import { parseCookies } from "nookies";

const useGuestRoute = (toPath: string = "/"): void => {
  const router = useRouter();
  const { token } = parseCookies();
  const isLoggedIn = Boolean(token);

  if (isLoggedIn) {
    router.push(toPath);
  }
};

export default useGuestRoute;
