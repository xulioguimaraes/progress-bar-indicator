import { NavBar } from "../components/NavBar/NavBar";
import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress"; 
import "nprogress/nprogress.css"; 

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
