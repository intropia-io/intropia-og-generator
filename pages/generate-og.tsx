import type { NextPage } from "next";
import styles from "../styles/Template.module.css";

const Home: NextPage = () => {
  return <div className={styles.mainTemplate} style={{background: "url(/images/tr3-og-dao.svg) center", backgroundSize: "cover"}} />;
};

export default Home;
