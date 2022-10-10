import React from "react";
import { CategoryCard, CategoryImage } from "../styles/CategoriesStyles";

const CardCategories = ({ category }) => {
  return (
    <CategoryCard>
      {category?.imagenCategoria?.urlImg && (
        <CategoryImage
          src={category.imagenCategoria.urlImg}
          alt={category.titulo}
        />
      )}
      <h3>{category.titulo}</h3>
    </CategoryCard>
  );
};

export default CardCategories;
