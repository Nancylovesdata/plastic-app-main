import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Header } from "./header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { Navbar1 } from "../components/navbar1";

export const Homepage = () => {

const [login, Setlogin] = useState(false);


  return (
    <div>
      {login?  <Navbar1 />: <Navbar />}
     
    
      
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


