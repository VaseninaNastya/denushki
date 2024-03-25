import { FC } from "react";
import styles from "./IncomeSection.module.scss";
import Footer from "../Footer";
import MoneyInput from "../MoneyInput";

const IncomeSection: FC = () => (
  <form className={styles.container}>
    <div className={styles.wrapper}>
      <MoneyInput />
    </div>

    <Footer />
  </form>
);

export default IncomeSection;
