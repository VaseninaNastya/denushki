import { PropsWithChildren, FC } from "react";
import Header from "../Header";
import styles from "./Page.module.scss";

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      {children}
    </div>
  );
};

export default Page;
