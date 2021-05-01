import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="max-size">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/**
     * @todo Make responsive layout
     * @body Make the sidebar hide in small screens and add a toggle button.
     */}
    <div className="max-size" style={{ display: "flex" }}>
      <Sidebar />
      <div className="flex-column w-100 p-3">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
