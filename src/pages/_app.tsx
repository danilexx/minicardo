import App from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import { StoreProvider } from "easy-peasy";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { ThemeProvider } from "-/lib/StyledComponents";
import { GlobalStyles } from "-/lib/GlobalStyles";
import { theme } from "-/lib/theme";
import Fonts from "-/utils/fonts";
import { makeStore } from "-/store";
import Nav from "-/components/Nav";
import Footer from "-/components/Footer";
import "react-toastify/dist/ReactToastify.css";

// Call it once in your app. At the root of your app is the best place
toast.configure({
  className: "minicardo-error-toast",
  bodyClassName: "minicardo-error-toast",
  toastClassName: "minicardo-error-toast",
  autoClose: 8000
});
interface it {
  Component: any;
  ctx: any;
}

// eslint-disable-next-line import/no-mutable-exports
export let store: any;
class MyApp extends App<{ store: any }> {
  async componentDidMount() {
    Fonts();
    const cookies = parseCookies(null);
    if (cookies.token) {
      this.props.store.getActions().user.login({ token: cookies.token });
    }
  }

  static async getInitialProps({ Component, ctx }: it) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  constructor(props: any) {
    super(props);
    store = props.store;
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { Component, pageProps = {}, store } = this.props;
    return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Nav />

          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </StoreProvider>
    );
  }
}

export default withRedux(makeStore, { debug: false })(MyApp);
