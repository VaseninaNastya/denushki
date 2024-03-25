import { FC } from "react";
import { Mode } from "../../domain/Mode";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { setActiveMode } from "../../domain/modeSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store";

const Header: FC = () => {
  const activeMode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <div
        className={classNames(
          styles.modeTab,
          activeMode === Mode.Spending && styles.activeModeTab
        )}
        onClick={() => dispatch(setActiveMode(Mode.Spending))}
      >
        {Mode.Spending}
      </div>
      <div
        className={classNames(
          styles.modeTab,
          activeMode === Mode.Income && styles.activeModeTab
        )}
        onClick={() => dispatch(setActiveMode(Mode.Income))}
      >
        {Mode.Income}
      </div>
    </div>
  );
};

export default Header;
