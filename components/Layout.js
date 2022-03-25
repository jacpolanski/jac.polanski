import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"<jac.polanski/>"}</title>
        <meta name="<jac.polanski/>" content="Personal landing page" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
