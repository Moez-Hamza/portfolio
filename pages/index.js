import Head from "next/head";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const title = "Moez Hamza — Full Stack Developer";
  const description =
    "Former architect turned full stack developer. Portfolio of Moez Hamza — React, TypeScript, Node.js. Based in Tunis.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Moez Hamza" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/moez-hamza.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio />
    </>
  );
}
