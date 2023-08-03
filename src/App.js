import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blogs from "./components/blogs";

import CaseStudies from "./components/caseStudies";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <CaseStudies />
      <Pricing />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
}
export default App;
