import Layout from "@/components/Layout";
import List from "@/components/List";
import MyGoogleMap from "@/components/Map";
import Link from "next/link";
import React from "react";

const roads = () => {
  return (
    <Layout title="Gestión de Rutas">
      <h1>Gestión de Rutas</h1>
      <p>Selecciona las rutas que deseas mostrar o selecciona una para editar</p>
      <MyGoogleMap></MyGoogleMap>
    </Layout>
  );
};
export default roads;
