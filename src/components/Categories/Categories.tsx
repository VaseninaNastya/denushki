import { FC } from "react";
import { categorieLabels } from "../../domain/CategorieLabels";
import styles from "./Categories.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { setActiveCategorie } from "../../reducers/categorieSlice";
import { CategorieLabels } from "../../domain/CategorieLabels";
import Tab from "../Tab";

const Categories: FC = () => {
  const activeCategorie = useSelector(
    (state: RootState) => state.categorie.value
  );
  const dispatch = useDispatch();
  const onCategorieClick = (categorieLabel: CategorieLabels) =>
    dispatch(setActiveCategorie(categorieLabel));

  return (
    <div className={styles.wrapper}>
      {categorieLabels.map((categorieLabel) => (
        <Tab
          key={categorieLabel}
          label={categorieLabel as string}
          isTabActive={categorieLabel === activeCategorie}
          onTabClick={() => onCategorieClick(categorieLabel)}
        />
      ))}
    </div>
  );
};

export default Categories;
