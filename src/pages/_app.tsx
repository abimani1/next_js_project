import type { AppProps } from "next/app";
import "./styles1/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
