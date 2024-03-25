import { FC } from "react";
import styles from "./SpendingSection.module.scss";
import Categories from "../Categories";
import Currency from "../Currency";
import Page from "../../../Core/components/Page";

const SpendingSection: FC = () => (
  <Page>
    <form className={styles.container}>
      <div className={styles.wrapper}>
        <Categories />
        <div className={styles.container}>
          <input name="spending" id="spending" />
          <Currency />
        </div>
      </div>
      <div className={styles.footer}>
        <button>Contribute</button>
      </div>
    </form>
  </Page>
);

export default SpendingSection;
