import React, { useEffect } from "react";
import {
  AdminContainer,
  HeaderContainer,
  StyledH2,
  StyledForm,
  StyledInput,
  TitleDesc,
  CatCity,
  Feature,
  Images,
  StyledButton,
  DivButton,
} from "./AdminProductStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminProductEdit = () => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ obj: null });
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
  const handleCategory = (e) => {
    setSelectedCategory({ obj: categories[e.target.value] });
  };

  const [image, setImage] = useState({
    title: "",
    url: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setImage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [selectedCity, setSelectedCity] = useState({ obj: null });
  const [cities, setCities] = useState([{}]);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.223.117.95:8080/ciudad`);
      const result = await response.json();
      setCities(result);
    };
    request();
  }, []);
  const handleCity = (e) => {
    setSelectedCity({ obj: cities[e.target.value] });
  };

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [features, setFeatures] = useState();
  const [featuresResult, setFeaturesResult] = useState(0);

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        "http://18.223.117.95:8080/caracteristica/listar"
      );
      const result = await response.json();
      return (
        setFeatures([...new Set(result.map((item) => item?.nombre))]),
        setFeaturesResult(result)
      );
    };
    request();
  }, []);

  const handleFeatures = (e) => {
    if (e.target.value !== "no definido") {
      const newFeature = featuresResult.filter(
        (each) => each.id === parseInt(e.target.value)
      )[0];
      if (selectedFeatures) {
        setSelectedFeatures((current) => [...current, newFeature]);
      } else {
        setSelectedFeatures(newFeature);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://18.223.117.95:8080/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("Token"),
      },
      body: JSON.stringify({
        id: id,
        titulo: title,
        descripcion: description,
        imagen: [
          {
            id: 65,
            titulo: image.title,
            urlImg: image.url,
          },
          {
            id: 37,
            titulo: "zInteriorDeportivo1",
            urlImg:
              "https://ubicarbd.s3.us-east-2.amazonaws.com/imagenesCarros/deportivos/zInteriorDeportivo1.png",
          },
          {
            id: 38,
            titulo: "zInteriorDeportivo2",
            urlImg:
              "https://ubicarbd.s3.us-east-2.amazonaws.com/imagenesCarros/deportivos/zInteriorDeportivo2.png",
          },
          {
            id: 39,
            titulo: "zInteriorDeportivo3",
            urlImg:
              "https://ubicarbd.s3.us-east-2.amazonaws.com/imagenesCarros/deportivos/zInteriorDeportivo3.png",
          },
          {
            id: 40,
            titulo: "zInteriorDeportivo4",
            urlImg:
              "https://ubicarbd.s3.us-east-2.amazonaws.com/imagenesCarros/deportivos/zInteriorDeportivo4.png",
          },
        ],
        caracteristica: selectedFeatures,
        politica: [],
        ciudad: selectedCity.obj,
        categoria: selectedCategory.obj,
      }),
    }).then((response) => {
      if (response.status < 300) {
        navigate("/editar/success");
      } else {
        alert(`Error con respuesta: ${response.status}`);
      }
    });
  };
  return (
    <AdminContainer>
      <HeaderContainer>
        <h1>Administracion</h1>
        <button onClick={() => navigate("/administracion")}>
          Crear producto
        </button>
      </HeaderContainer>
      <StyledH2>Editar Producto</StyledH2>
      <StyledForm onSubmit={handleSubmit}>
        <TitleDesc>
          <label>
            ID
            <StyledInput
              required
              type="number"
              placeholder="id"
              name="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </label>
        </TitleDesc>
        <TitleDesc>
          <label>
            Titulo:
            <StyledInput
              required
              type="text"
              placeholder="titulo del auto"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Descripcion:
            <StyledInput
              required
              type="text"
              placeholder="descripcion del auto"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </TitleDesc>
        <CatCity>
          <label>
            Categoria
            <select onChange={handleCategory} required>
              <option value="s">Categorias</option>
              {categories.map((feature, index) => (
                <option key={index} value={index}>
                  {feature.titulo + " , " + feature.descripcion + "."}
                </option>
              ))}
            </select>
          </label>
          <label>
            Ciudad
            <select onChange={handleCity} required>
              <option value="s">Ciudades</option>
              {cities.map((city, index) => (
                <option key={index} value={index}>
                  {city.direccion + " , " + city.provincia}
                </option>
              ))}
            </select>
          </label>
        </CatCity>
        <h4>Imagen</h4>
        <Images>
          <label>
            Titulo:
            <StyledInput
              required
              type="text"
              placeholder="titulo de la imagen"
              name="title"
              value={image.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Imagen (URL):
            <StyledInput
              required
              type="text"
              placeholder="url de la imagen"
              name="url"
              value={image.url}
              onChange={handleChange}
            />
          </label>
        </Images>
        <div>
          <h4>Caracteristicas</h4>
          {features?.length > 0 && (
            <Feature>
              {features.map((f) => (
                <label key={f}>
                  <span>{f}</span>
                  <select onChange={handleFeatures}>
                    <option value="no definido">no definido</option>
                    {featuresResult &&
                      featuresResult
                        .filter((each) => each.nombre === f)
                        .map((feature, index) => (
                          <option key={index} value={feature.id}>
                            {feature.nombre + " : " + feature.valor}
                          </option>
                        ))}
                  </select>
                </label>
              ))}
            </Feature>
          )}
        </div>
        <DivButton>
          <StyledButton type="submit">Editar Producto</StyledButton>
        </DivButton>
      </StyledForm>
    </AdminContainer>
  );
};

export default AdminProductEdit;
