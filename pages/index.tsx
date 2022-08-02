import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Aos from "aos";
import Navbar from "../components/organism/Navbar";
import MainBanner from "../components/organism/MainBaner";
import Transaction from "./transaction";
import TransactionStep from "../components/organism/TransactionStep";
import FeatureGame from "../components/organism/FeatureGame";
import Reached from "../components/organism/Reached";
import Story from "../components/organism/Story";
import Footer from "../components/organism/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
