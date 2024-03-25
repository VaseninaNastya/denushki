import { FC, useState } from "react";
import Categorie from "../Categorie";
import { categorieLabels, CategorieLabels } from "../../domain/CategorieLabels";
import styles from "./Categories.module.scss";

const Categories: FC = () => {
  //TO DO: убрать в стор
  const [activeCategorie, setActiveCategorie] = useState<CategorieLabels>(
    categorieLabels[0]
  );

  return (
    <div className={styles.wrapper}>
      {categorieLabels.map((categorieLabel) => (
        <Categorie
          key={categorieLabel}
          categorieLabel={categorieLabel}
          setActiveCategorie={setActiveCategorie}
          activeCategorie={activeCategorie}
        />
      ))}
    </div>
  );
};

export default Categories;
