import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
// import FavouriteProjects from "../components/FavouriteProjects";
// import LatestCode from "../components/LatestCode";
import Me from "../components/Me";

export default function Home() {
  return (
    <ContainerBlock 
    title= "Moez Hamza - Developer, Architect,Pianist and Dj"
    description= "I'am a fresh developer and a huge fan of music. Get in touch with me to know more"
    >
      <Me/>
      {/* <FavouriteProjects />
      <LatestCode />  */}
    </ContainerBlock>
  );
}