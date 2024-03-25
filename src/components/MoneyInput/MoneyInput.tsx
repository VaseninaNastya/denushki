import { FC } from "react";
import styles from "./MoneyInput.module.scss";
import Currency from "../Currency";

const MoneyInput: FC = () => (
  <div className={styles.container}>
    <input className={styles.input} name="moneyInput" id="moneyInput" />
    <Currency />
  </div>
);

export default MoneyInput;
