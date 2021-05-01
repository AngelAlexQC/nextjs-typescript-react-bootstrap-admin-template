import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart, FaHome, FaRoad } from "react-icons/fa";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        {/**
         *  You can add a header for the sidebar ex: logo
         */}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <Link href="/">
            <MenuItem icon={<FaHome />}>Inicio</MenuItem>
          </Link>
          <Link href="/roads">
            <MenuItem icon={<FaRoad />}>Rutas</MenuItem>
          </Link>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};
