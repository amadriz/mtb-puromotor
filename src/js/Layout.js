import React from "react";
import { Navbar } from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "../components/Footer";



export const Layout = () => {

  //the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

