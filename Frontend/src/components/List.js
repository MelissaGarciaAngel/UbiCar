import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { ListC, ListDiv, ListH3 } from "../styles/ListStyles";

const List = ({ selectedCity, selectedCategory, cat, selectedDates }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("Recomendaciones");
  useEffect(() => {
    let apiProducts = [];
    const request = async () => {
      if (selectedDates && selectedCity) {
        let startDate = selectedDates[0].startDate.getDate()
        if(startDate < 10) {
          startDate = `0${startDate}`
        }
        let startMonth = selectedDates[0].startDate.getMonth()
        if(startMonth < 10) {
          startMonth = `0${startMonth}`
        }
        let endDate = selectedDates[0].endDate.getDate()
        if(endDate < 10) {
          endDate = `0${endDate}`
        }
        let endMonth = selectedDates[0].endDate.getMonth()
        if(endMonth < 10) {
          endMonth = `0${endMonth}`
        }
        const formatedStartDate = `${selectedDates[0].startDate.getFullYear()}-${startMonth}-${startDate}`;
        const formatedEndDate = `${selectedDates[0].endDate.getFullYear()}-${endMonth}-${endDate}`;
        const response = await fetch(
          `http://18.223.117.95:8080/producto/disponible/${formatedEndDate}/${formatedStartDate}/${selectedCity}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json; charset=utf-8" },
          }
        );
        const result = await response.json();
        apiProducts = result;
      } else {
        const response = await fetch(
          `http://18.223.117.95:8080/producto/listar`
        );
        const result = await response.json();
        apiProducts = result;
      }
    };
    request().then(() => {
      if (selectedCategory) {
        const productsByCategory = apiProducts.filter(
          (car) => car.categoria.id === selectedCategory
        );
        setProducts(productsByCategory);
        setTitle(`Autos ${cat}`);
      } else return setProducts(apiProducts);
    });
  }, [selectedCategory, selectedCity, cat, selectedDates]);
  return (
    <ListDiv>
      <ListH3>{title}</ListH3>
      <ListC>
        {products &&
          products
            .sort((a, b) => a.id - b.id)
            .slice(0,14)
            .map((product) => {
              return (
              <Card
                key={product.id}
                product={product}
                image={product.imagen.length > 0 ? product.imagen[0] : null}
              />
            )})}
      </ListC>
    </ListDiv>
  );
};
export default List;
