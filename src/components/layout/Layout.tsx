import React from 'react'
import Header from "../header/Header";
import Cursor from "../cursor/Cursor"
import Footer from "../footer/Footer";

export default function Layout({ children }) {

    return (
        <div className="container">

            <Header />
            <Cursor />
            <main className="main" >{children}</main>
            <Footer />
            <style jsx>{`
                .container {
                    width: 100%;
                }
            `}</style>
        </div>

    );
}