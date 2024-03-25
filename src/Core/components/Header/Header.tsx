import { FC, useState } from "react";
import { Mode } from "../../domain/Mode";
import styles from "./Header.module.scss";
import classNames from "classnames";

const Header: FC = () => {
  const [activeMode, setActiveMode] = useState(Mode.Spending);

  return (
    <div className={styles.header}>
      <div
        className={classNames(
          styles.modeTab,
          activeMode === Mode.Spending && styles.activeModeTab
        )}
      >
        {Mode.Spending}
      </div>
      <div
        className={classNames(
          styles.modeTab,
          activeMode === Mode.Income && styles.activeModeTab
        )}
      >
        {Mode.Income}
      </div>
    </div>
  );
};

export default Header;
