import React from "react";
import Header from "./Components/Header";
import Description from "./Components/Description";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Header />
      <Description />
      <Projects />
      <About />
      <Analytics />
    </div>
  );
}

export default App;
