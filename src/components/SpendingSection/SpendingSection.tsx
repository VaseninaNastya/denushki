import { FC } from "react";
import styles from "./SpendingSection.module.scss";
import Categories from "../Categories";
import MoneyInput from "../MoneyInput";
import Footer from "../Footer";

const SpendingSection: FC = () => (
  <form className={styles.container}>
    <div className={styles.wrapper}>
      <Categories />
      <MoneyInput />
    </div>
    <Footer />
  </form>
);

export default SpendingSection;
