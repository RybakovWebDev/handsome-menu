import styles from "./page.module.css";

import Header from "@/components/Header";
import MenuWrapper from "@/components/MenuWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <Header />
        <MenuWrapper />
      </section>
      <Footer />
    </main>
  );
}
