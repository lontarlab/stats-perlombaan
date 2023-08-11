import '@/styles/global.css'

import { useRouter } from "next/router";
import Layout from "../components/layout"
import "../styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const pathName = router.pathname;
  return pathName.includes("/login") ? (
      <main className={`font-sans`}>
        <Component {...pageProps} />
      </main>
  ) : (
      <main className={`font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
  );
}
