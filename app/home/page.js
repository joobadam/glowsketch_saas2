import React from "react";

import { Header76 } from "./components/Header76";
import { Navbar2 } from "./components/Navbar2";
import { Layout250 } from "./components/Layout250";
import { Gallery10 } from "./components/Gallery10";
import { Testimonial16 } from "./components/Testimonial16";
import { Pricing24 } from "./components/Pricing24";
import { Cta27 } from "./components/Cta27";
import { Footer2 } from "./components/Footer2";

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