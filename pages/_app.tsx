import "../styles/globals.css";
import type { AppProps } from "next/app";
import BackgroundImage from "../components/BackgroundImage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundImage />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
