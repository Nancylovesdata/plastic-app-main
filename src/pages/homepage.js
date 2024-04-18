import React from "react";
import { Navbar } from "../components/navbar";
import { Header } from "./header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
