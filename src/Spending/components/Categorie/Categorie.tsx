import { FC } from "react";
import { CategorieLabels } from "../../domain/CategorieLabels";
import classNames from "classnames";
import styles from "./Categorie.module.scss";

interface ICategorieProps {
  categorieLabel: CategorieLabels;
  setActiveCategorie: (categorieLabel: CategorieLabels) => void;
  activeCategorie: CategorieLabels;
}

const Categorie: FC<ICategorieProps> = ({
  categorieLabel,
  setActiveCategorie,
  activeCategorie,
}) => {
  const isCategorieActive = categorieLabel === activeCategorie;
  return (
    <div
      className={classNames(
        styles.categorie,
        isCategorieActive && styles.active
      )}
      onClick={() => setActiveCategorie(categorieLabel)}
    >
      {categorieLabel}
    </div>
  );
};

export default Categorie;
