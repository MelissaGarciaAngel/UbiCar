import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductPage from "./pages/product/ProductPage";
import ScrollToTop from "./components/ScrollToTop";
import Reserve from "./pages/reserve/Reserve";
import ReserveSuccess from './pages/reserve/ReserveSuccess'
import AdminProduct from "./pages/admin/AdminProduct";
import AdminSuccess from "./pages/admin/AdminSuccess";
import AdminProductEdit from "./pages/admin/AdminProductEdit";
import EditSuccess from "./pages/admin/EditSuccess";
import UsuarioReserva from "./pages/usuario/UsuarioReserva";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Layout isLogged={isLogged} setIsLogged={setIsLogged}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login argument="login" setIsLogged={setIsLogged}/>} />
          <Route path="/register" element={<Login argument="register" setIsLogged={setIsLogged} />} />
          <Route path="/product/:id" element={<ProductPage isLogged={isLogged} />} />
          <Route path="/product/:id/reserve" element={<Reserve />} />
          <Route path="/product/:id/reserve/success" element={<ReserveSuccess/>} />
          <Route path="/administracion" element={<AdminProduct />} />
          <Route path="/editar" element={<AdminProductEdit />} />
          <Route path="/editar/success" element={<EditSuccess />} />
          <Route path="/administracion/success" element={<AdminSuccess />} />
          <Route path="usuarioReserva" element={ <UsuarioReserva/> }/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
