import React from "react";

import styles from "./page.module.css";

import Header from "@/components/Header";
import MenuWrapper from "@/components/MenuWrapper";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <Header />
        <MenuWrapper />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
