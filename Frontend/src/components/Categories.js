import React from "react";
import CardCategories from "./CardCategories";
import { useState, useEffect } from "react";
import { CategoriesContainer, CardContainer } from "../styles/CategoriesStyles";
import { Skeleton } from "@mui/material";

const Categories = ({ handleCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `http://18.223.117.95:8080/categoria/listar`
      );
      const result = await response.json();
      setCategories(result);
    };
    request();
  }, []);
  const loader = () => {
    return (
      <CategoriesContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Skeleton
            sx={{ bgcolor: "grey.200", margin: "20px", borderRadius: "20px" }}
            variant="text"
            width={350}
            height={350}
          >
            <CardContainer></CardContainer>
          </Skeleton>
          <Skeleton
            sx={{ bgcolor: "grey.200", margin: "20px", borderRadius: "20px" }}
            variant="text"
            width={350}
            height={350}
          >
            <CardContainer></CardContainer>
          </Skeleton>
          <Skeleton
            sx={{ bgcolor: "grey.200", margin: "20px", borderRadius: "20px" }}
            variant="text"
            width={350}
            height={350}
          >
            <CardContainer></CardContainer>
          </Skeleton>
          <Skeleton
            sx={{ bgcolor: "grey.200", margin: "20px", borderRadius: "20px" }}
            variant="text"
            width={350}
            height={350}
          >
            <CardContainer></CardContainer>
          </Skeleton>
        </div>
      </CategoriesContainer>
    );
  };
  if (loading) {
    return loader();
  } else {
    return (
      <CategoriesContainer>
        <h2>Buscar por tipo</h2>
        <CardContainer>
          {categories.map((category) => (
            <div key={category.id} onClick={() => handleCategory(category)}>
              <CardCategories key={category.id} category={category} />
            </div>
          ))}
        </CardContainer>
      </CategoriesContainer>
    );
  }
};

export default Categories;
