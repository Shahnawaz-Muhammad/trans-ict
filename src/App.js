import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blogs from "./components/blogs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Pricing />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
}
export default App;
