import { FC } from "react";
import { currencyLabels } from "../../domain/CurrencyLabels";
import Tab from "../Tab";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { setActiveCurrency } from "../../reducers/currencySlice";
import { CurrencyLabels } from "../../domain/CurrencyLabels";
import styles from "./Currency.module.scss";

const Currency: FC = () => {
  const activeCurrency = useSelector(
    (state: RootState) => state.currency.value
  );
  const dispatch = useDispatch();

  const onCurrencyClick = (currencyLabel: CurrencyLabels) =>
    dispatch(setActiveCurrency(currencyLabel));

  return (
    <div className={styles.wrapper}>
      {currencyLabels.map((currencyLabel) => (
        <Tab
          key={currencyLabel}
          label={currencyLabel as string}
          isTabActive={activeCurrency === currencyLabel}
          onTabClick={() => onCurrencyClick(currencyLabel)}
        />
      ))}
    </div>
  );
};

export default Currency;
