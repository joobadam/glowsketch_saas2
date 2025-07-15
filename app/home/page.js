import React from "react";

import { Header76 } from "./components/Header76";

import { Layout250 } from "./components/Layout250";
import { Gallery10 } from "./components/Gallery10";
import { Testimonial16 } from "./components/Testimonial16";
import { Pricing24 } from "./components/Pricing24";
import { Cta27 } from "./components/Cta27";


export default function Home() {
  return (
    <div>
      <Header76 />
      <Layout250 />
      <Gallery10 />
      <Testimonial16 />
      <Pricing24 />
      <Cta27 />
    </div>
  );
}


/* 
export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Header76 />
      <Layout250 />
      <Gallery10 />
      <Testimonial16 />
      <Pricing24 />
      <Cta27 />
      <Footer2 />
    </div>
  );
} */