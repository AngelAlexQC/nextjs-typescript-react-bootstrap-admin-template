import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import React from "react";
const LeafletNoSSR = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

const roads = () => {
  return (
    <Layout title="Gestión de Rutas">
      <h1>Gestión de Rutas</h1>
      <p>Selecciona las rutas que deseas mostrar o selecciona una para editar</p>
      <LeafletNoSSR></LeafletNoSSR>
    </Layout>
  );
};
export default roads;
