import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "./Footer";

export const Layout = ({children}) => {

    return (
        <>
            <Head>
                <title>{"<jac.polanski/>"}</title>
                <meta
                    name="<jac.polanski/>"
                    content="Personal landing page"/>
                <link rel="icon" href="./favicon.ico"/>
            </Head>
            <div className="d-flex flex-column overflow-hidden min-vh-100 vh-100">
                <header><NavBar/></header>
                <main className="flex-grow-1 overflow-auto">
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};
