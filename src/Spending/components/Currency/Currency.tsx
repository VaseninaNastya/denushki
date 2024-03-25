import { FC } from "react";
import { currencyLabels } from "../../domain/CurrencyLabels";
import styles from "./Currency.module.scss";

const Currency: FC = () => (
  <select className={styles.wrapper}>
    {currencyLabels.map((currencyLabel) => (
      <option value="apple">{currencyLabel}</option>
    ))}
  </select>
);

export default Currency;
