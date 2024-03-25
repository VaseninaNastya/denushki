import { FC } from "react";
import styles from "./SpendingSection.module.scss";
import Categories from "../Categories";
import Currency from "../Currency";

const SpendingSection: FC = () => (
  <form className={styles.container}>
    <div className={styles.wrapper}>
      <Categories />
      <div>
        <input />
      </div>
      <div>
        <Currency />
      </div>
    </div>
    <button>Contribute</button>
  </form>
);

export default SpendingSection;
