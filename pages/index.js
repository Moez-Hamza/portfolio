import Head from "next/head";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const title = "Moez Hamza — Développeur Full Stack";
  const description =
    "Ancien architecte reconverti en développement web. Spécialisé React, TypeScript, Node.js. Basé à Tunis, ouvert aux opportunités professionnelles.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Moez Hamza" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://portfolio-drab-two-18.vercel.app/moez-hamza.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://portfolio-drab-two-18.vercel.app/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://portfolio-drab-two-18.vercel.app/moez-hamza.jpg" />
        
        {/* LinkedIn specific */}
        <meta property="linkedin:owner" content="https://www.linkedin.com/in/moez-hamza/" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio />
    </>
  );
}
