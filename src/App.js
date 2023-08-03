import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blogs from "./components/blogs";

import CaseStudies from "./components/caseStudies";
import Pricing from "./components/pricing";
import Features from "./components/choose-us";
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
