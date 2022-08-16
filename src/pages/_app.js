import "@/styles/globals.css";
import { useEffect } from "react";
// import "flowbite";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import( "flowbite");
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
