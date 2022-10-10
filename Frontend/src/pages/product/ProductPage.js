import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [images, setImages] = useState([{}]);
  const [product, setProduct] = useState({});
  const [features, setFeatures] = useState([{}]);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.223.117.95:8080/producto/${id}`);
      const result = await response.json();
      setProduct(result);
      setImages(result.imagen);
      setFeatures(result.caracteristica)
    };
    request();
  }, [id]);
  return <Product images={images} product={product} features={features} />;
};

export default ProductPage;
