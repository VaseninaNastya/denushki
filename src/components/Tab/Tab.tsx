import { FC } from "react";
import classNames from "classnames";
import styles from "./Tab.module.scss";

interface ITabProps {
  label: string;
  isTabActive: boolean;
  onTabClick: () => void;
}

const Tab: FC<ITabProps> = ({ label, isTabActive, onTabClick }) => (
  <div
    className={classNames(styles.tab, isTabActive && styles.active)}
    onClick={onTabClick}
  >
    {label}
  </div>
);

export default Tab;
